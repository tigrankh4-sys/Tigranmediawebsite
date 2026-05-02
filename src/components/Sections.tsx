'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { steps, plans } from '../data/content';
import ContactForm from './ContactForm';
import FaqAccordion from './FaqAccordion';
import Footer from './Footer';
import { DividerStar, DividerDiamonds } from './DecorativeElements';

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

      const ratingEl = document.querySelector('.stat-rating');
      const pctEl = document.querySelector('.stat-percentage');
      const scoreEl = document.querySelector('.stat-score');

      const ratingObj = { val: 5 };
      gsap.fromTo(ratingObj, { val: 0 }, {
        val: 5, duration: 1.2, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true },
        onUpdate: () => { if (ratingEl) ratingEl.textContent = ratingObj.val.toFixed(1); },
      });

      const pctObj = { val: 100 };
      gsap.fromTo(pctObj, { val: 0 }, {
        val: 100, duration: 1.2, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true },
        onUpdate: () => { if (pctEl) pctEl.textContent = Math.floor(pctObj.val) + '%'; },
      });

      const scoreObj = { val: 99 };
      gsap.fromTo(scoreObj, { val: 0 }, {
        val: 99, duration: 1.2, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true },
        onUpdate: () => { if (scoreEl) scoreEl.textContent = Math.floor(scoreObj.val) + '/100'; },
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
              <span className="tm-stat-num stat-rating">5.0</span>
              <span className="tm-stat-label">Google Rating</span>
              <span className="tm-stat-sub">Geverifieerd</span>
            </div>
            <div className="tm-stat-col stat-item">
              <span className="tm-stat-num stat-percentage">100%</span>
              <span className="tm-stat-label">Tevreden klanten</span>
              <span className="tm-stat-sub">Altijd</span>
            </div>
            <div className="tm-stat-col stat-item">
              <span className="tm-stat-num stat-score">99/100</span>
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
                  className="tm-profile-img"
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

        <div className="tm-divider-wrap">
          <DividerDiamonds />
        </div>

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
            <a href="/projecten/forest-bean/" className="tm-project-card tm-project-link">
              <Image className="tm-project-img tm-project-img-fluid" src="/images/forest-bean-cover.webp" alt="Forest & Bean — Coffeeshop concept Antwerpen" width={3016} height={1724} sizes="(max-width: 768px) 100vw, 900px" />
              <div className="tm-project-info">
                <div className="tm-project-name">Forest &amp; Bean</div>
                <div className="tm-project-sub">Coffeeshop concept — Antwerpen</div>
              </div>
            </a>
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

        <div className="tm-divider-wrap">
          <DividerStar />
        </div>

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
                  <a href="#contact" className="tm-pricing-cta">
                    {p.cta}
                  </a>
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

      <Footer />
    </>
  );
}
