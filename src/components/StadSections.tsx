'use client';

import React from 'react';
import { steden } from '@/data/steden';
import { steps, plans, faqs } from '../data/content';

const css = `
  .sc-section {
    padding-top: 120px;
    padding-bottom: 120px;
    border-top: 1px solid rgba(240, 235, 224, 0.15);
    background: #0F0F0F;
    color: #F0EBE0;
  }

  .sc-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 64px;
  }

  .sc-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(48px, 6vw, 96px);
    color: #F0EBE0;
    margin-bottom: 80px;
  }

  /* WERKWIJZE */
  .sc-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .sc-step {
    padding: 0 40px 0 0;
    position: relative;
  }

  .sc-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 1px; height: 100%;
    background: #F0EBE0;
    opacity: 0.3;
  }

  .sc-step:not(:first-child) { padding-left: 40px; padding-right: 40px; }
  .sc-step:last-child { padding-left: 40px; padding-right: 0; }

  .sc-step-number {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(80px, 7vw, 120px);
    color: #F0EBE0;
    line-height: 1;
    margin-bottom: 20px;
  }

  .sc-step-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    margin-bottom: 12px;
  }

  .sc-step-desc {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
    line-height: 1.7;
  }

  /* PROJECT */
  .sc-project-card {
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid #F0EBE0;
  }

  .sc-project-img {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .sc-project-info { padding: 32px 40px; }

  .sc-project-name {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(36px, 4vw, 64px);
    color: #F0EBE0;
    margin-bottom: 10px;
  }

  .sc-project-sub {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
  }

  .sc-project-note {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.5;
    text-align: center;
    margin-top: 40px;
  }

  /* PRICING */
  .sc-pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    gap: 2px;
    margin-bottom: 40px;
  }

  .sc-price-card {
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid rgba(240, 235, 224, 0.15);
  }

  .sc-price-card--highlight { border: 2px solid #F0EBE0; }

  .sc-price-name {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    margin-bottom: 24px;
  }

  .sc-price-amount {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(48px, 5vw, 80px);
    color: #F0EBE0;
    line-height: 1;
    margin-bottom: 8px;
  }

  .sc-price-subtitle {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.5;
    margin-bottom: 32px;
  }

  .sc-price-divider {
    width: 100%;
    height: 1px;
    background: #F0EBE0;
    opacity: 0.2;
    margin-bottom: 32px;
  }

  .sc-price-features { list-style: none; flex: 1; }

  .sc-price-features li {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.7;
    padding: 8px 0;
    border-bottom: 1px solid rgba(240, 235, 224, 0.1);
    line-height: 1.5;
  }

  .sc-price-features li::before { content: '— '; opacity: 0.4; }

  .sc-pricing-cta {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    background: #0F0F0F;
    border: none;
    padding: 14px 24px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 4px 4px 10px #050505, -4px -4px 10px #1a1a1a;
    transition: box-shadow 80ms linear;
    width: 100%;
    text-align: center;
    display: block;
    outline: none;
    margin-top: auto;
  }

  .sc-pricing-cta:hover { box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a; }

  .sc-pricing-note {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.4;
    text-align: center;
  }

  /* CTA MID */
  .sc-cta-mid { text-align: center; }

  .sc-cta-mid-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(48px, 6vw, 96px);
    color: #F0EBE0;
    margin-bottom: 24px;
  }

  .sc-cta-mid-sub {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
    margin-bottom: 48px;
  }

  .sc-cta-btn {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    background: #0F0F0F;
    border: none;
    padding: 13px 26px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 4px 4px 10px #050505, -4px -4px 10px #1a1a1a;
    transition: box-shadow 80ms linear;
    outline: none;
    text-decoration: none;
    display: inline-block;
  }

  .sc-cta-btn:hover { box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a; }

  /* FAQ */
  .sc-faq-list { list-style: none; }
  .sc-faq-item { border-bottom: 1px solid rgba(240, 235, 224, 0.3); }

  .sc-faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 0;
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    outline: none;
  }

  .sc-faq-question span {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
  }

  .sc-faq-icon {
    font-size: 18px;
    color: #F0EBE0;
    opacity: 0.6;
    flex-shrink: 0;
    margin-left: 24px;
    transition: transform 300ms ease;
  }

  .sc-faq-answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height 300ms ease;
  }

  .sc-faq-answer-inner {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: #F0EBE0;
    opacity: 0.65;
    line-height: 1.8;
    padding-bottom: 28px;
  }

  /* CONTACT */
  .sc-contact-inner { max-width: 720px; }

  .sc-contact-sub {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
    margin-top: -48px;
    margin-bottom: 64px;
  }

  .sc-form { display: flex; flex-direction: column; gap: 0; }

  .sc-field {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(240, 235, 224, 0.2);
  }

  .sc-field:first-child { border-top: 1px solid rgba(240, 235, 224, 0.2); }

  .sc-field label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.5;
    padding: 16px 0 6px;
  }

  .sc-field input, .sc-field select, .sc-field textarea {
    background: transparent;
    border: none;
    color: #F0EBE0;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 0 0 16px;
    outline: none;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
  }

  .sc-field select option { background: #0F0F0F; color: #F0EBE0; }
  .sc-field textarea { resize: none; }

  .sc-field input::placeholder, .sc-field textarea::placeholder {
    color: #F0EBE0;
    opacity: 0.2;
  }

  .sc-submit {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    background: #0F0F0F;
    border: none;
    padding: 18px 24px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 4px 4px 10px #050505, -4px -4px 10px #1a1a1a;
    transition: box-shadow 80ms linear;
    width: 100%;
    outline: none;
    margin-top: 40px;
  }

  .sc-submit:hover { box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a; }

  .sc-form-status {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-top: 24px;
    opacity: 0.7;
  }

  /* REGIO NAV */
  .sc-regio-nav {
    padding: 24px 64px;
    border-top: 1px solid rgba(240, 235, 224, 0.1);
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
    background: #0F0F0F;
  }

  .sc-regio-nav a {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.4;
    text-decoration: none;
  }

  /* FOOTER */
  .sc-footer {
    border-top: 1px solid rgba(240, 235, 224, 0.15);
    padding: 32px 64px;
    text-align: center;
    background: #0F0F0F;
  }

  .sc-footer p {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    .sc-section { padding-top: 80px; padding-bottom: 80px; }
    .sc-inner { padding: 0 24px; }
    .sc-steps { grid-template-columns: 1fr; gap: 48px; }
    .sc-step::after { display: none !important; }
    .sc-step, .sc-step:not(:first-child), .sc-step:last-child { padding: 0; }
    .sc-pricing-grid { grid-template-columns: 1fr; gap: 0; }
    .sc-price-card { padding: 40px 24px; }
    .sc-project-info { padding: 24px; }
    .sc-regio-nav { padding: 24px; }
    .sc-footer { padding: 32px 24px; }
  }
`;

function ContactForm() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_API ?? '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: fd.get('naam'),
          bedrijf: fd.get('bedrijf'),
          email: fd.get('email'),
          pakket: fd.get('pakket'),
          bericht: fd.get('bericht'),
          honeypot: fd.get('honeypot'),
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="sc-form-status">Uw aanvraag is verzonden. Wij nemen binnen 24u contact op.</p>;
  }

  return (
    <form className="sc-form" onSubmit={handleSubmit}>
      <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="sc-field"><label htmlFor="sc-naam">Naam</label><input id="sc-naam" type="text" name="naam" placeholder="Jan Janssen" required /></div>
      <div className="sc-field"><label htmlFor="sc-bedrijf">Bedrijf</label><input id="sc-bedrijf" type="text" name="bedrijf" placeholder="Jouw Bedrijf BV" /></div>
      <div className="sc-field"><label htmlFor="sc-email">E-mail</label><input id="sc-email" type="email" name="email" placeholder="jan@bedrijf.be" required /></div>
      <div className="sc-field">
        <label htmlFor="sc-pakket">Pakket interesse</label>
        <select id="sc-pakket" name="pakket" defaultValue="">
          <option value="" disabled>Selecteer pakket</option>
          <option value="Starter">Starter</option>
          <option value="Groei">Groei</option>
          <option value="Full Service">Full Service</option>
        </select>
      </div>
      <div className="sc-field"><label htmlFor="sc-bericht">Bericht</label><textarea id="sc-bericht" name="bericht" rows={4} placeholder="Vertel ons over uw project..." /></div>
      <button type="submit" className="sc-submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Verzenden...' : 'Verstuur →'}
      </button>
      {status === 'error' && <p className="sc-form-status">Er ging iets mis. Probeer opnieuw of mail naar info@tigranmedia.be</p>}
    </form>
  );
}

function FaqAccordion() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <ul className="sc-faq-list">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <li className="sc-faq-item" key={i}>
            <button className="sc-faq-question" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
              <span>{item.q}</span>
              <span className="sc-faq-icon" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div className="sc-faq-answer" style={{ maxHeight: isOpen ? '400px' : '0' }}>
              <p className="sc-faq-answer-inner">{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function StadSections({ stadNaam }: { stadNaam: string }) {
  return (
    <>
      <style>{css}</style>

      <section className="sc-section">
        <div className="sc-inner">
          <h2 className="sc-title">Hoe het werkt.</h2>
          <div className="sc-steps">
            {steps.map((s) => (
              <div className="sc-step" key={s.num}>
                <div className="sc-step-number">{s.num}</div>
                <div className="sc-step-label">{s.label}</div>
                <div className="sc-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-section">
        <div className="sc-inner">
          <h2 className="sc-title">Ons werk.</h2>
          <div className="sc-project-card">
            <img className="sc-project-img" src="/images/forest-bean.webp" alt="Forest & Bean — Coffeeshop concept Turnhout" />
            <div className="sc-project-info">
              <div className="sc-project-name">Forest &amp; Bean</div>
              <div className="sc-project-sub">Coffeeshop concept — Turnhout</div>
            </div>
          </div>
          <p className="sc-project-note">Meer projecten volgen. Bent u de volgende?</p>
        </div>
      </section>

      <section className="sc-section">
        <div className="sc-inner">
          <h2 className="sc-title">Transparante prijzen.</h2>
          <div className="sc-pricing-grid">
            {plans.map((p) => (
              <div key={p.name} className={`sc-price-card${p.highlight ? ' sc-price-card--highlight' : ''}`}>
                <div className="sc-price-name">{p.name}</div>
                <div className="sc-price-amount">{p.price}</div>
                <div className="sc-price-subtitle">{p.sub}</div>
                <div className="sc-price-divider" />
                <ul className="sc-price-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <button className="sc-pricing-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="sc-pricing-note">Alle prijzen excl. BTW. 50% aanbetaling, 50% bij oplevering.</p>
        </div>
      </section>

      <section className="sc-section">
        <div className="sc-inner sc-cta-mid">
          <h2 className="sc-cta-mid-title">Klaar om {stadNaam} te domineren?</h2>
          <p className="sc-cta-mid-sub">Plan een vrijblijvend gesprek van 30 minuten.</p>
          <a href="#contact" className="sc-cta-btn">Gratis Discovery Call →</a>
        </div>
      </section>

      <section className="sc-section">
        <div className="sc-inner">
          <h2 className="sc-title">Veelgestelde vragen.</h2>
          <FaqAccordion />
        </div>
      </section>

      <section className="sc-section" id="contact">
        <div className="sc-inner">
          <div className="sc-contact-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
              <img
                src="https://tigranmedia.be/images/tigran-profiel.webp"
                alt="Tigran — Tigran Media"
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 20%', flexShrink: 0, border: '1px solid rgba(240,235,224,0.3)' }}
              />
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#F0EBE0', marginBottom: '4px' }}>Tigran — Tigran Media</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.08em', color: '#F0EBE0', opacity: 0.5, lineHeight: 1.6 }}>Webdesigner in de Kempen. Beschikbaar voor heel Vlaanderen.</div>
              </div>
            </div>
            <h2 className="sc-title">Start uw project.</h2>
            <p className="sc-contact-sub">Vul het formulier in. Wij nemen binnen 24u contact op.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <nav aria-label="Regio's" className="sc-regio-nav">
        {steden.map((s) => (
          <a key={s.slug} href={`/webdesign/${s.slug}`}>Webdesign {s.naam}</a>
        ))}
      </nav>
      <footer className="sc-footer">
        <p>© {new Date().getFullYear()} Tigran Media — Turnhout, België</p>
      </footer>
    </>
  );
}
