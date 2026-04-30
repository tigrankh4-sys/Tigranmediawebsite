'use client';

import React, { useEffect } from 'react';
import { steden } from '@/data/steden';

const css = `
  /* ── SHARED ── */
  main, section, .tm-footer {
    background: #0F0F0F;
    color: #F0EBE0;
  }

  section {
    padding-top: 120px;
    padding-bottom: 120px;
    border-top: 1px solid rgba(240, 235, 224, 0.15);
  }

  .tm-section {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 64px;
  }

  .tm-section-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(48px, 6vw, 96px);
    color: #F0EBE0;
    margin-bottom: 80px;
  }

  /* ── STATS COUNTER ── */
  .tm-stats-bar {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .tm-stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 64px;
  }

  .tm-stat-col {
    padding: 0 48px;
    text-align: center;
    position: relative;
  }

  .tm-stat-col:first-child { padding-left: 0; text-align: left; }
  .tm-stat-col:last-child  { padding-right: 0; text-align: right; }

  .tm-stat-col:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 1px; height: 100%;
    background: #F0EBE0;
    opacity: 0.2;
  }

  .tm-stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(64px, 8vw, 120px);
    color: #F0EBE0;
    line-height: 1;
    display: block;
  }

  .tm-stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    margin-top: 12px;
    display: block;
  }

  .tm-stat-sub {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.45;
    margin-top: 6px;
    display: block;
  }

  /* ── WERKWIJZE ── */
  .tm-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .tm-step {
    padding: 0 40px 0 0;
    position: relative;
  }

  .tm-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 1px; height: 100%;
    background: #F0EBE0;
    opacity: 0.3;
  }

  .tm-step:not(:first-child) { padding-left: 40px; padding-right: 40px; }
  .tm-step:last-child { padding-left: 40px; padding-right: 0; }

  .tm-step-number {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(80px, 7vw, 120px);
    color: #F0EBE0;
    line-height: 1;
    margin-bottom: 20px;
  }

  .tm-step-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    margin-bottom: 12px;
  }

  .tm-step-desc {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
    line-height: 1.7;
  }

  /* ── PROJECTEN ── */
  .tm-project-card {
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid #F0EBE0;
  }

  .tm-project-img {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .tm-project-img-fallback {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #1A1A1A;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tm-project-img-fallback span {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(32px, 4vw, 64px);
    color: #F0EBE0;
    opacity: 0.4;
  }

  .tm-project-info { padding: 32px 40px; }

  .tm-project-name {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(36px, 4vw, 64px);
    color: #F0EBE0;
    margin-bottom: 10px;
  }

  .tm-project-sub {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
  }

  .tm-project-note {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.5;
    text-align: center;
    margin-top: 40px;
  }

  /* ── CTA MID ── */
  .tm-cta-mid {
    text-align: center;
  }

  .tm-cta-mid-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(48px, 6vw, 96px);
    color: #F0EBE0;
    margin-bottom: 24px;
  }

  .tm-cta-mid-sub {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
    margin-bottom: 48px;
  }

  .tm-cta-mid-btn {
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

  .tm-cta-mid-btn:hover {
    box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a;
  }

  /* ── PRIJZEN ── */
  .tm-pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    gap: 2px;
    margin-bottom: 40px;
  }

  .tm-price-card {
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid rgba(240, 235, 224, 0.15);
  }

  .tm-price-card--highlight { border: 2px solid #F0EBE0; }

  .tm-price-name {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    margin-bottom: 24px;
  }

  .tm-price-amount {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(48px, 5vw, 80px);
    color: #F0EBE0;
    line-height: 1;
    margin-bottom: 8px;
  }

  .tm-price-subtitle {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.5;
    margin-bottom: 32px;
  }

  .tm-price-divider {
    width: 100%;
    height: 1px;
    background: #F0EBE0;
    opacity: 0.2;
    margin-bottom: 32px;
  }

  .tm-price-features { list-style: none; flex: 1; }

  .tm-price-features li {
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

  .tm-price-features li::before { content: '— '; opacity: 0.4; }

  .tm-pricing-cta {
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

  .tm-pricing-cta:hover { box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a; }

  .tm-pricing-note {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.4;
    text-align: center;
  }

  /* ── FAQ ── */
  .tm-faq-list { list-style: none; }
  .tm-faq-item { border-bottom: 1px solid rgba(240, 235, 224, 0.3); }

  .tm-faq-question {
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

  .tm-faq-question span {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
  }

  .tm-faq-icon {
    font-family: 'DM Mono', monospace;
    font-size: 18px;
    color: #F0EBE0;
    opacity: 0.6;
    flex-shrink: 0;
    margin-left: 24px;
    transition: transform 300ms ease;
  }

  .tm-faq-answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height 300ms ease;
  }

  .tm-faq-answer-inner {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: #F0EBE0;
    opacity: 0.65;
    line-height: 1.8;
    padding-bottom: 28px;
  }

  /* ── CONTACT ── */
  .tm-contact-inner { max-width: 720px; }

  .tm-contact-sub {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
    margin-top: -48px;
    margin-bottom: 64px;
  }

  .tm-form { display: flex; flex-direction: column; gap: 0; }

  .tm-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(240, 235, 224, 0.2);
  }

  .tm-field:first-child { border-top: 1px solid rgba(240, 235, 224, 0.2); }

  .tm-field label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.5;
    padding: 16px 0 6px;
  }

  .tm-field input, .tm-field select, .tm-field textarea {
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

  .tm-field select option { background: #0F0F0F; color: #F0EBE0; }
  .tm-field textarea { resize: none; }

  .tm-field input::placeholder, .tm-field textarea::placeholder {
    color: #F0EBE0;
    opacity: 0.2;
  }

  .tm-submit {
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

  .tm-submit:hover { box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a; }

  .tm-form-status {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-top: 24px;
    opacity: 0.7;
  }

  /* ── REGIO NAV ── */
  .tm-regio-nav {
    padding: 24px 64px;
    border-top: 1px solid rgba(240, 235, 224, 0.1);
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
  }

  .tm-regio-nav a {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.4;
    text-decoration: none;
  }

  /* ── FOOTER ── */
  .tm-footer {
    border-top: 1px solid rgba(240, 235, 224, 0.15);
    padding: 32px 64px;
    text-align: center;
  }

  .tm-footer p {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.4;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    section { padding-top: 80px; padding-bottom: 80px; }
    .tm-section { padding: 0 24px; }
    .tm-stats-bar { padding-top: 60px; padding-bottom: 60px; }
    .tm-stats-grid { grid-template-columns: 1fr; gap: 48px; padding: 0 24px; }
    .tm-stat-col, .tm-stat-col:first-child, .tm-stat-col:last-child { padding: 0; text-align: left; }
    .tm-stat-col::after { display: none !important; }
    .tm-steps { grid-template-columns: 1fr; gap: 48px; }
    .tm-step::after { display: none !important; }
    .tm-step, .tm-step:not(:first-child), .tm-step:last-child { padding: 0; }
    .tm-pricing-grid { grid-template-columns: 1fr; gap: 0; }
    .tm-price-card { padding: 40px 24px; }
    .tm-project-info { padding: 24px; }
    .tm-footer { padding: 32px 24px; }
  }
`;

const steps = [
  { num: '01', label: 'Discovery Call', desc: 'Wij luisteren. Jij vertelt. Wij nemen alles op.' },
  { num: '02', label: 'Design',          desc: 'Een ontwerp op maat. Geen templates. Geen compromissen.' },
  { num: '03', label: 'Build',           desc: 'Live in 1 week. 99/100 Google score. Gegarandeerd.' },
  { num: '04', label: 'Launch',          desc: 'Jouw site live. Wij blijven beschikbaar.' },
];

const plans = [
  {
    name: 'Starter', price: '€500', sub: 'Voor wie wil starten.',
    features: ['Volledig custom Next.js website', 'Custom CMS + eigen beheersysteem', 'Live in 1 week', '99/100 Google score', 'SEO technisch correct'],
    cta: 'Kies Starter', highlight: false,
  },
  {
    name: 'Groei', price: '€1.000', sub: 'Voor wie wil groeien.',
    features: ['Volledig custom Next.js website', 'Custom CMS + eigen beheersysteem', 'SEO + copywriting', 'Live in 1 week', '99/100 Google score', '1 maand support'],
    cta: 'Kies Groei', highlight: true,
  },
  {
    name: 'Full Service', price: '€1.500', sub: 'Voor wie wil domineren.',
    features: ['Volledig custom Next.js website', 'Custom CMS + eigen beheersysteem', 'SEO + copywriting + strategie', 'Live in 1 week', '99/100 Google score', '3 maanden support'],
    cta: 'Kies Full Service', highlight: false,
  },
];

const faqs = [
  { q: 'Waarom zijn jullie prijzen zo laag?', a: 'Omdat wij slank werken. Geen groot kantoor, geen overhead, geen tussenpersonen. Wij investeren in technologie en vakmanschap — niet in dure bureaukosten. Die besparing geven wij door aan u.' },
  { q: 'Hoe lang duurt het?', a: 'Één week. Vanaf het moment dat wij alle inhoud van u hebben, is uw site live binnen 7 dagen. Geen weken wachten, geen vage deadlines.' },
  { q: 'Wat krijg ik precies?', a: 'Een volledig custom Next.js website — geen template, geen WordPress. Inclusief een eigen beheersysteem waarmee u zelf teksten en afbeeldingen kan aanpassen. Zonder technische kennis.' },
  { q: 'Heb ik technische kennis nodig?', a: 'Nee. Uw beheersysteem is gebouwd voor ondernemers, niet voor developers. Als u een e-mail kan schrijven, kan u uw site beheren.' },
  { q: 'Wat als ik niet tevreden ben?', a: 'Wij werken in nauw overleg. Na de discovery call weet u exact wat u krijgt. Geen verrassingen, geen meerkosten. Als er iets niet klopt, lossen wij het op.' },
];

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
    return <p className="tm-form-status">Uw aanvraag is verzonden. Wij nemen binnen 24u contact op.</p>;
  }

  return (
    <form className="tm-form" onSubmit={handleSubmit}>
      <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="tm-field form-field"><label>Naam</label><input type="text" name="naam" placeholder="Jan Janssen" required /></div>
      <div className="tm-field form-field"><label>Bedrijf</label><input type="text" name="bedrijf" placeholder="Jouw Bedrijf BV" /></div>
      <div className="tm-field form-field"><label>E-mail</label><input type="email" name="email" placeholder="jan@bedrijf.be" required /></div>
      <div className="tm-field form-field">
        <label>Pakket interesse</label>
        <select name="pakket" defaultValue="">
          <option value="" disabled>Selecteer pakket</option>
          <option value="Starter">Starter</option>
          <option value="Groei">Groei</option>
          <option value="Full Service">Full Service</option>
        </select>
      </div>
      <div className="tm-field form-field"><label>Bericht</label><textarea name="bericht" rows={4} placeholder="Vertel ons over uw project..." /></div>
      <button type="submit" className="tm-submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Verzenden...' : 'Verstuur →'}
      </button>
      {status === 'error' && <p className="tm-form-status">Er ging iets mis. Probeer opnieuw of mail naar info@tigranmedia.be</p>}
    </form>
  );
}

function FaqAccordion() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <ul className="tm-faq-list">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <li className="tm-faq-item faq-item" key={i}>
            <button className="tm-faq-question" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
              <span>{item.q}</span>
              <span className="tm-faq-icon" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div className="tm-faq-answer" style={{ maxHeight: isOpen ? '400px' : '0' }}>
              <p className="tm-faq-answer-inner">{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sections() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 0.7, ease: 'power2.out' });

      gsap.utils.toArray<HTMLElement>('.tm-section-title').forEach((el) => {
        gsap.from(el, {
          y: 30, opacity: 0,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      gsap.from('.stat-item', {
        y: 30, opacity: 0, stagger: 0.15,
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%' },
      });

      const ratingObj = { val: 0 };
      gsap.to(ratingObj, {
        val: 5, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true },
        onUpdate: () => {
          const el = document.querySelector('.stat-rating');
          if (el) el.textContent = ratingObj.val.toFixed(1);
        },
      });

      const pctObj = { val: 0 };
      gsap.to(pctObj, {
        val: 100, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true },
        onUpdate: () => {
          const el = document.querySelector('.stat-percentage');
          if (el) el.textContent = Math.floor(pctObj.val) + '%';
        },
      });

      const scoreObj = { val: 0 };
      gsap.to(scoreObj, {
        val: 99, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true },
        onUpdate: () => {
          const el = document.querySelector('.stat-score');
          if (el) el.textContent = Math.floor(scoreObj.val) + '/100';
        },
      });

      gsap.from('.werkwijze-item', {
        y: 30, opacity: 0, stagger: 0.1,
        scrollTrigger: { trigger: '.werkwijze-section', start: 'top 80%' },
      });

      gsap.from('.prijs-kaart', {
        y: 40, opacity: 0, stagger: 0.15,
        scrollTrigger: { trigger: '.prijzen-section', start: 'top 80%' },
      });

      gsap.from('.faq-item', {
        y: 20, opacity: 0, stagger: 0.08,
        scrollTrigger: { trigger: '.faq-section', start: 'top 85%' },
      });

      gsap.from('.form-field', {
        y: 20, opacity: 0, stagger: 0.08,
        scrollTrigger: { trigger: '.contact-section', start: 'top 85%' },
      });

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    loadGSAP();
    return () => cleanup?.();
  }, []);

  return (
    <>
      <style>{css}</style>
      <main>
        <section className="tm-stats-bar stats-section">
          <div className="tm-stats-grid">
            <div className="tm-stat-col stat-item">
              <span className="tm-stat-num stat-rating">0.0</span>
              <span className="tm-stat-label">Google Rating</span>
              <span className="tm-stat-sub">Geverifieerd</span>
            </div>
            <div className="tm-stat-col stat-item">
              <span className="tm-stat-num stat-percentage">0%</span>
              <span className="tm-stat-label">Tevreden klanten</span>
              <span className="tm-stat-sub">Altijd</span>
            </div>
            <div className="tm-stat-col stat-item">
              <span className="tm-stat-num stat-score">0/100</span>
              <span className="tm-stat-label">Google Score</span>
              <span className="tm-stat-sub">Gegarandeerd</span>
            </div>
          </div>
        </section>

        <section id="werkwijze" className="werkwijze-section">
          <div className="tm-section">
            <h2 className="tm-section-title">Hoe het werkt.</h2>
            <div className="tm-steps">
              {steps.map((s) => (
                <div className="tm-step werkwijze-item" key={s.num}>
                  <div className="tm-step-number">{s.num}</div>
                  <div className="tm-step-label">{s.label}</div>
                  <div className="tm-step-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projecten">
          <div className="tm-section">
            <h2 className="tm-section-title">Ons werk.</h2>
            <div className="tm-project-card">
              <img className="tm-project-img" src="/images/forest-bean.webp" alt="Forest & Bean — Coffeeshop concept Turnhout" />
              <div className="tm-project-info">
                <div className="tm-project-name">Forest &amp; Bean</div>
                <div className="tm-project-sub">Coffeeshop concept — Turnhout</div>
              </div>
            </div>
            <p className="tm-project-note">Meer projecten volgen. Bent u de volgende?</p>
          </div>
        </section>

        <section>
          <div className="tm-section tm-cta-mid">
            <h2 className="tm-cta-mid-title">Klaar om meer klanten te bereiken?</h2>
            <p className="tm-cta-mid-sub">Plan een vrijblijvend gesprek van 30 minuten.</p>
            <a href="/#contact" className="tm-cta-mid-btn">Gratis Discovery Call →</a>
          </div>
        </section>

        <section id="prijzen" className="prijzen-section">
          <div className="tm-section">
            <h2 className="tm-section-title">Transparante prijzen.</h2>
            <div className="tm-pricing-grid">
              {plans.map((p) => (
                <div key={p.name} className={`tm-price-card prijs-kaart${p.highlight ? ' tm-price-card--highlight' : ''}`}>
                  <div className="tm-price-name">{p.name}</div>
                  <div className="tm-price-amount">{p.price}</div>
                  <div className="tm-price-subtitle">{p.sub}</div>
                  <div className="tm-price-divider" />
                  <ul className="tm-price-features">
                    {p.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <button className="tm-pricing-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    {p.cta}
                  </button>
                </div>
              ))}
            </div>
            <p className="tm-pricing-note">Alle prijzen excl. BTW. 50% aanbetaling, 50% bij oplevering.</p>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="tm-section">
            <h2 className="tm-section-title">Veelgestelde vragen.</h2>
            <FaqAccordion />
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="tm-section">
            <div className="tm-contact-inner">
              <h2 className="tm-section-title">Start uw project.</h2>
              <p className="tm-contact-sub">Vul het formulier in. Wij nemen binnen 24u contact op.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="tm-footer">
        <nav aria-label="Regio's" className="tm-regio-nav">
          {steden.map((s) => (
            <a key={s.slug} href={`/webdesign/${s.slug}`}>Webdesign {s.naam}</a>
          ))}
        </nav>
        <p>© 2025 Tigran Media — Turnhout, België</p>
      </footer>
    </>
  );
}
