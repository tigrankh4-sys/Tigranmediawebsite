'use client';

import Image from 'next/image';
import { steden } from '@/data/steden';
import { steps, plans } from '../data/content';
import ContactForm from './ContactForm';
import FaqAccordion from './FaqAccordion';


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
