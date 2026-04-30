import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ── Rate limiting (in-memory, 5 req/min per IP) ──────────────────────────────
const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRate(ip: string): boolean {
  const now = Date.now();
  const rec = rateMap.get(ip);
  if (!rec || now > rec.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (rec.count >= 5) return false;
  rec.count++;
  return true;
}

// ── Sanitization ──────────────────────────────────────────────────────────────
function sanitize(val: unknown, maxLen: number): string {
  if (typeof val !== 'string') return '';
  return val
    .slice(0, maxLen)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

// ── Nodemailer ────────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const VALID_PAKKETTEN = new Set(['Starter', 'Groei', 'Full Service', '']);

export async function POST(req: NextRequest) {
  // IP detection
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  // Rate limit
  if (!checkRate(ip)) {
    return NextResponse.json(
      { error: 'Te veel verzoeken. Probeer later opnieuw.' },
      { status: 429 }
    );
  }

  // Request size limit (10 KB)
  const contentLength = Number(req.headers.get('content-length') ?? 0);
  if (contentLength > 10_000) {
    return NextResponse.json({ error: 'Verzoek te groot.' }, { status: 413 });
  }

  // Parse JSON safely
  let body: Record<string, unknown>;
  try {
    const raw = await req.json();
    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) throw new Error();
    body = raw as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 });
  }

  // Honeypot — silent reject
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Validate & sanitize
  const naam = sanitize(body.naam, 100);
  const bedrijf = sanitize(body.bedrijf, 100);
  const rawEmail = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const pakket = sanitize(body.pakket, 50);
  const bericht = sanitize(body.bericht, 2000);

  if (naam.length < 2) {
    return NextResponse.json({ error: 'Naam is verplicht (min. 2 tekens).' }, { status: 400 });
  }
  if (!isValidEmail(rawEmail)) {
    return NextResponse.json({ error: 'Geldig e-mailadres is verplicht.' }, { status: 400 });
  }
  if (pakket && !VALID_PAKKETTEN.has(pakket)) {
    return NextResponse.json({ error: 'Ongeldig pakket.' }, { status: 400 });
  }

  const to = process.env.SMTP_USER as string;
  const safeEmail = sanitize(rawEmail, 254);

  try {
    await transporter.sendMail({
      from: `"Tigran Media" <${to}>`,
      to,
      subject: `Nieuwe aanvraag — ${naam}${bedrijf ? ` (${bedrijf})` : ''}`,
      html: `
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Bedrijf:</strong> ${bedrijf || '—'}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Pakket:</strong> ${pakket || '—'}</p>
        <p><strong>Bericht:</strong><br>${bericht.replace(/\n/g, '<br>') || '—'}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Tigran Media" <${to}>`,
      to: rawEmail,
      subject: 'Wij hebben uw aanvraag ontvangen — Tigran Media',
      html: `
        <p>Goeiedag ${naam},</p>
        <p>Wij hebben uw aanvraag goed ontvangen en nemen binnen 24 uur contact met u op.</p>
        <br>
        <p>Met vriendelijke groeten,<br>Tigran Media<br>tigranmedia.be</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json({ error: 'Verzenden mislukt.' }, { status: 500 });
  }
}
