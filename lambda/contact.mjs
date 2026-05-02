import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const VALID_PAKKETTEN = new Set(['Starter', 'Groei', 'Full Service', 'Op Maat', '']);
const MAX_BODY_BYTES = 10_000;

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}

// Single-line: strips newlines and CR (blocks SMTP header injection)
function sanitize(val, maxLen) {
  if (typeof val !== 'string') return '';
  return escapeHtml(val.slice(0, maxLen).replace(/[\r\n]+/g, ' ')).trim();
}

// Multiline (e.g. message body): keeps newlines, still HTML-safe
function sanitizeMultiline(val, maxLen) {
  if (typeof val !== 'string') return '';
  return escapeHtml(val.slice(0, maxLen)).trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

const rateMap = new Map();
function checkRate(ip) {
  const now = Date.now();
  const rec = rateMap.get(ip);
  if (!rec || now > rec.resetAt) { rateMap.set(ip, { count: 1, resetAt: now + 60_000 }); return true; }
  if (rec.count >= 5) return false;
  rec.count++;
  return true;
}

const headers = {
  'Access-Control-Allow-Origin': 'https://tigranmedia.be',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export const handler = async (event) => {
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const ip = event.requestContext?.http?.sourceIp ?? 'unknown';
  if (!checkRate(ip)) {
    return { statusCode: 429, headers, body: JSON.stringify({ error: 'Te veel verzoeken.' }) };
  }

  const rawBody = event.body ?? '';
  if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
    return { statusCode: 413, headers, body: JSON.stringify({ error: 'Verzoek te groot.' }) };
  }

  let body;
  try {
    body = JSON.parse(rawBody || '{}');
    if (typeof body !== 'object' || body === null || Array.isArray(body)) throw new Error();
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Ongeldig verzoek.' }) };
  }

  if (body.honeypot) {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }

  const naam = sanitize(body.naam, 100);
  const bedrijf = sanitize(body.bedrijf, 100);
  const rawEmail = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const pakket = sanitize(body.pakket, 50);
  const bericht = sanitizeMultiline(body.bericht, 2000);

  if (naam.length < 2) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Naam is verplicht.' }) };
  if (!isValidEmail(rawEmail)) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Geldig e-mailadres is verplicht.' }) };
  if (pakket && !VALID_PAKKETTEN.has(pakket)) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Ongeldig pakket.' }) };

  const to = process.env.SMTP_USER;
  const safeEmail = sanitize(rawEmail, 254);

  try {
    await transporter.sendMail({
      from: `"Tigran Media" <${to}>`,
      to,
      replyTo: rawEmail,
      subject: `Nieuwe aanvraag — ${naam}${bedrijf ? ` (${bedrijf})` : ''}`,
      html: `<p><strong>Naam:</strong> ${naam}</p><p><strong>Bedrijf:</strong> ${bedrijf || '—'}</p><p><strong>E-mail:</strong> ${safeEmail}</p><p><strong>Pakket:</strong> ${pakket || '—'}</p><p><strong>Bericht:</strong><br>${bericht.replace(/\n/g, '<br>') || '—'}</p>`,
    });

    await transporter.sendMail({
      from: `"Tigran Media" <${to}>`,
      to: rawEmail,
      subject: 'Wij hebben uw aanvraag ontvangen — Tigran Media',
      html: `<p>Goeiedag ${naam},</p><p>Wij hebben uw aanvraag goed ontvangen en nemen binnen 24 uur contact met u op.</p><br><p>Met vriendelijke groeten,<br>Tigran Media<br>tigranmedia.be</p>`,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('[contact] mail send failed:', err?.code ?? 'unknown', err?.responseCode ?? '');
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Verzenden mislukt.' }) };
  }
};
