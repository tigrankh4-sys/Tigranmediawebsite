'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { steps, plans } from '../data/content';
import ContactForm from './ContactForm';
import FaqAccordion from './FaqAccordion';

const FooterAccordions = dynamic(() => import('./FooterAccordions'), { ssr: false, loading: () => null });

export default function Sections() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let raf: number;

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

      gsap.from('.over-mij-col', {
        y: 30, opacity: 0, stagger: 0.15,
        scrollTrigger: { trigger: '.over-mij-section', start: 'top 80%' },
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

    raf = requestAnimationFrame(() => { loadGSAP(); });
    return () => { cancelAnimationFrame(raf); cleanup?.(); };
  }, []);

  return (
    <>
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

        <section id="over" className="over-mij-section">
          <div className="tm-section">
            <div className="tm-over-grid">
              <div className="over-mij-col">
                <Image
                  id="foto-placeholder"
                  src="/images/tigran-profiel.webp"
                  alt="Tigran — Tigran Media"
                  width={480}
                  height={480}
                  priority={true}
                  sizes="(max-width: 768px) 320px, 480px"
                  style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', margin: '0 auto', border: '1px solid rgba(240,235,224,0.3)', maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className="over-mij-col">
                <h2 className="tm-over-title">Wie zit er aan de andere kant?</h2>
                <p className="tm-over-body">Ik ben Tigran. Autodidact. Ondernemer. Webdesigner in de Kempen.</p>
                <p className="tm-over-body">Wat mij onderscheidt van andere webdesigners is simpel: ik ben zelf ondernemer. Ik begrijp wat het betekent om klanten te willen binnenhalen, om een merk te bouwen, om resultaat te willen zien voor je investering.</p>
                <p className="tm-over-body">Ik kom uit de fotografie — dat geeft me een oog voor detail dat je niet leert uit een cursus. Compositie, licht, gevoel. Dat zit in elk project.</p>
                <p className="tm-over-body">Ik stop niet tot het af is. En het is niet af tot jij tevreden bent.</p>
                <div className="tm-over-divider" />
                <p className="tm-over-location">Gebaseerd in Turnhout, Kempen — beschikbaar voor heel Vlaanderen.</p>
              </div>
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
              <Image className="tm-project-img" src="/images/forest-bean.webp" alt="Forest & Bean — Coffeeshop concept Turnhout" width={1200} height={800} sizes="(max-width: 768px) 100vw, 600px" />
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
            <FaqAccordion cls="tm" />
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="tm-section">
            <div className="tm-contact-inner">
              <h2 className="tm-section-title">Start uw project.</h2>
              <p className="tm-contact-sub">Vul het formulier in. Wij nemen binnen 24u contact op.</p>
              <ContactForm cls="tm" />
            </div>
          </div>
        </section>
      </main>

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
