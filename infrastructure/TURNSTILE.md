# Cloudflare Turnstile Integration (anti-spam)

Honeypot blocks dumb bots. Turnstile blocks targeted/manual spam.
Free, privacy-friendly, no user interaction needed (invisible challenge).

## Setup (15 min)

1. Sign up at https://dash.cloudflare.com/?to=/:account/turnstile (free)
2. Create a Site → "Tigran Media" → domain `tigranmedia.be`
3. Save your **Site Key** (public) and **Secret Key** (private).

## Frontend — `ContactForm.tsx`

Add the Turnstile widget. It generates a token on form load.

```tsx
'use client';
import { useEffect, useState } from 'react';

declare global {
  interface Window { turnstile?: { render: (el: string, opts: object) => void }; }
}

export default function ContactForm({ cls }: { cls: string }) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    s.async = true;
    document.body.appendChild(s);
    (window as Window).onTurnstileSuccess = (t: string) => setToken(t);
  }, []);

  // ... existing handleSubmit, but include token in body:
  // body: JSON.stringify({ ..., turnstile: token })

  return (
    <form>
      {/* existing fields */}
      <div
        className="cf-turnstile"
        data-sitekey="YOUR_SITE_KEY"
        data-callback="onTurnstileSuccess"
      />
      <button type="submit" disabled={!token}>Verstuur →</button>
    </form>
  );
}
```

## Backend — `lambda/contact.mjs`

Verify the token against Cloudflare before processing:

```js
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET;

async function verifyTurnstile(token, ip) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token, remoteip: ip }),
  });
  const data = await res.json();
  return data.success === true;
}

// In handler, after rate limit:
if (!await verifyTurnstile(body.turnstile, ip)) {
  return { statusCode: 403, headers, body: JSON.stringify({ error: 'Verificatie mislukt.' }) };
}
```

## Lambda env

```bash
aws lambda update-function-configuration \
  --function-name tigranmedia-contact \
  --environment "Variables={SMTP_HOST=...,SMTP_PORT=...,SMTP_USER=...,SMTP_PASS=...,TURNSTILE_SECRET=...}"
```

## CSP update

Add to `infrastructure/security-headers-policy.json`:
```
script-src ... https://challenges.cloudflare.com;
frame-src ... https://challenges.cloudflare.com;
```

Then re-run `apply-security-headers.sh`.
