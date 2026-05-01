'use client';

import Image from 'next/image';
import { steps, plans } from '../data/content';
import ContactForm from './ContactForm';
import FaqAccordion from './FaqAccordion';
import FooterAccordions from './FooterAccordions';


export default function StadSections({ stadNaam }: { stadNaam: string }) {
  return (
    <>

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
            <Image className="sc-project-img" src="/images/forest-bean.webp" alt="Forest & Bean — Coffeeshop concept Turnhout" width={1200} height={800} sizes="(max-width: 768px) 100vw, 600px" />
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
          <FaqAccordion cls="sc" />
        </div>
      </section>

      <section className="sc-section" id="contact">
        <div className="sc-inner">
          <div className="sc-contact-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
              <Image
                src="/images/tigran-profiel.webp"
                alt="Tigran — Tigran Media"
                width={64}
                height={64}
                sizes="64px"
                style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 20%', flexShrink: 0, border: '1px solid rgba(240,235,224,0.3)' }}
              />
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#F0EBE0', marginBottom: '4px' }}>Tigran — Tigran Media</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.08em', color: '#F0EBE0', opacity: 0.5, lineHeight: 1.6 }}>Webdesigner in de Kempen. Beschikbaar voor heel Vlaanderen.</div>
              </div>
            </div>
            <h2 className="sc-title">Start uw project.</h2>
            <p className="sc-contact-sub">Vul het formulier in. Wij nemen binnen 24u contact op.</p>
            <ContactForm cls="sc" />
          </div>
        </div>
      </section>

      <footer className="tm-footer">
        <div className="tm-footer-top">
          <span className="tm-footer-brand">Tigran Media</span>
          <nav className="tm-footer-nav">
            <a href="/#diensten">Diensten</a>
            <a href="/#projecten">Projecten</a>
            <a href="/#over">Over</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
        <div className="tm-footer-mid">
          <div>
            <p className="tm-footer-label">Contact</p>
            <div className="tm-footer-contact-row">
              <a href="mailto:info@tigranmedia.be">info@tigranmedia.be</a>
              <a href="tel:+32474114899">+32 474 11 48 99</a>
              <p>Ma–Vr 9:00 – 18:00</p>
              <p>Turnhout, België</p>
            </div>
          </div>
          <div>
            <p className="tm-footer-label">Regio&apos;s</p>
            <FooterAccordions />
          </div>
        </div>
        <div className="tm-footer-bottom">
          <p className="tm-footer-copy">© {new Date().getFullYear()} Tigran Media · BTW BE1035.278.921</p>
          <nav className="tm-footer-legal">
            <a href="/algemene-voorwaarden">Algemene Voorwaarden</a>
            <a href="/privacybeleid">Privacybeleid</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
