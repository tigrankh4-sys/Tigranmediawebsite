# Cal.com Direct Booking Setup

The site is wired to support a direct booking link. Until configured, all
"Gratis Discovery Call" CTAs fall back to the contact form (`#contact`).

## Why this matters

The current flow is **3 steps**:
1. User clicks "Gratis Discovery Call" → form
2. User fills 5 fields, submits, waits
3. Tigran emails back to schedule

A direct calendar link compresses this to **1 step**: pick a slot. Industry
data shows this lifts B2B service conversion 60-80% on cold prospects.

## Setup (10 min)

### Option A — Cal.com (recommended, free, open-source)

1. Sign up at https://cal.com → claim handle (e.g. `tigranmedia`)
2. Create event type: "Discovery Call"
   - Duration: 30 minutes
   - Buffer: 15 min before/after
   - Availability: Ma-Vr 9:00-18:00
   - Description: "Vrijblijvend gesprek over uw project. Geen verplichtingen."
3. Connect Google Calendar / Outlook for availability sync
4. Copy the public URL — should look like `https://cal.com/tigranmedia/discovery`

### Option B — Calendly

Similar flow. Free tier supports 1 event type.
URL format: `https://calendly.com/tigranmedia/discovery`

### Option C — TidyCal (€29 one-time)

Owned by Sumo. Pay once, use forever. URL format:
`https://tidycal.com/tigranmedia/discovery-call`

## Activation

Edit `src/config/site.ts`:

```ts
export const siteConfig = {
  calUrl: 'https://cal.com/tigranmedia/discovery',
  // ...
};
```

Then push + CodeBuild. All CTAs ("Gratis Discovery Call →") on:
- Homepage navbar
- Mid-section CTA
- City pages navbar + mid-section CTA
- Sticky mobile bottom bar

…will switch to direct booking, opening the calendar in a new tab.

## CSP update

The current Content-Security-Policy in
`infrastructure/security-headers-policy.json` has `frame-src` set to only
`https://www.openstreetmap.org`. If you EMBED Cal.com (rather than link), add
`https://cal.com https://app.cal.com` to `frame-src`. For LINK (recommended),
no CSP change needed.

## Tracking (optional)

Cal.com supports UTM parameter pass-through and Google Analytics events.
Add `?utm_source=tigranmedia.be&utm_medium=cta&utm_content={location}` to the
URL to track which CTA position drives bookings.
