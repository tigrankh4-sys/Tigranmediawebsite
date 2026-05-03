'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { steps, plans } from '../data/content';
import ContactForm from './ContactForm';
import FaqAccordion from './FaqAccordion';
import Footer from './Footer';
import { DividerStar, DividerDiamonds } from './DecorativeElements';
import { getDiscoveryCallHref, hasDirectBooking } from '@/config/site';

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

      gsap.from('.over-mij-col', {
        y: 30, opacity: 0, stagger: 0.15,
        scrollTrigger: { trigger: '.over-mij-section', start: 'top 80%' },
      });

      gsap.from('.werkwijze-item', {
        y: 30, opacity: 0, stagger: 0.1,
        scrollTrigger: { trigger: '.werkwijze-section', start: 'top 80%' },
      });

      gsap.from('.tm-belofte-item', {
        y: 30, opacity: 0, stagger: 0.1,
        scrollTrigger: { trigger: '.belofte-section', start: 'top 80%' },
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
              <span className="tm-stat-num stat-score">99/100</span>
              <span className="tm-stat-label">Google PageSpeed</span>
              <span className="tm-stat-sub">Verifieerbaar</span>
            </div>
            <div className="tm-stat-col stat-item">
              <span className="tm-stat-num">3</span>
              <span className="tm-stat-label">Projecten per maand</span>
              <span className="tm-stat-sub">Max — voor kwaliteit</span>
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
                  alt="Portret van Tigran, oprichter Tigran Media — Turnhout"
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
            <div className="tm-projects-grid">
              <a href="/projecten/forest-bean/" className="tm-project-card tm-project-link" target="_blank" rel="noopener noreferrer">
                <Image className="tm-project-img tm-project-img-fluid" src="/images/forest-bean-cover.webp" alt="Forest & Bean — Coffeeshop concept Antwerpen" width={3016} height={1724} sizes="(max-width: 768px) 50vw, 450px" />
                <div className="tm-project-info">
                  <div className="tm-project-name">Forest &amp; Bean</div>
                  <div className="tm-project-sub">Coffeeshop concept — Antwerpen</div>
                </div>
              </a>
              <a href="/projecten/dakwerken/" className="tm-project-card tm-project-link" target="_blank" rel="noopener noreferrer">
                <Image className="tm-project-img tm-project-img-fluid" src="/images/dakwerken-cover.webp" alt="Van Damme Dakwerken — Concept site Mechelen" width={1920} height={1280} sizes="(max-width: 768px) 50vw, 450px" />
                <div className="tm-project-info">
                  <div className="tm-project-name">Van Damme Dakwerken</div>
                  <div className="tm-project-sub">Dakwerker concept — Mechelen</div>
                </div>
              </a>
            </div>
            <p className="tm-project-note">
              Volgend project? <a href={getDiscoveryCallHref()} {...(hasDirectBooking ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>Boek een gesprek →</a>
            </p>
          </div>
        </section>

        <div className="tm-divider-wrap">
          <DividerStar />
        </div>

        <section id="prijzen" className="prijzen-section">
          <div className="tm-section">
            <h2 className="tm-section-title">Transparante prijzen.</h2>
            <p className="tm-pricing-help">Eén dienst, simpele site, snel live — Starter. Meerdere diensten met SEO en meer pagina's — Groei. Volledig brand-traject met copywriting en strategie — Full Service.</p>
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
                  <a href={`?pakket=${encodeURIComponent(p.name)}#contact`} className="tm-pricing-cta">
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
            <p className="tm-pricing-contact">Twijfelt u tussen pakketten? <a href={getDiscoveryCallHref()} {...(hasDirectBooking ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>Plan een 15-min gesprek →</a></p>
            <p className="tm-pricing-note">Alle prijzen excl. BTW. 50% aanbetaling, 50% bij oplevering.</p>
          </div>
        </section>

        <section id="belofte" className="belofte-section">
          <div className="tm-section">
            <h2 className="tm-section-title">Onze belofte.</h2>
            <p className="tm-belofte-intro">
              Wij zijn jong. We bouwen onze portfolio op. Dat betekent voor u:
              maximale aandacht, eerlijke prijzen, geen tussenlagen. Hier is wat
              wij u garanderen — zwart op wit.
            </p>
            <div className="tm-belofte-grid">
              <div className="tm-belofte-item">
                <div className="tm-belofte-num">01</div>
                <h3 className="tm-belofte-title">Vaste prijs in de offerte.</h3>
                <p className="tm-belofte-desc">
                  Wat in uw offerte staat, is wat u betaalt. Geen meerwerk-facturen
                  achteraf, geen verrassingen. Wijzigt het project van scope?
                  Dan stellen wij eerst een aanvulling op.
                </p>
              </div>
              <div className="tm-belofte-item">
                <div className="tm-belofte-num">02</div>
                <h3 className="tm-belofte-title">Live in 7 werkdagen.</h3>
                <p className="tm-belofte-desc">
                  Vanaf het moment dat u alle inhoud aanlevert. Halen we het
                  niet binnen 7 werkdagen door iets aan onze kant?
                  Dan krijgt u 20% van het pakketbedrag terug.
                </p>
              </div>
              <div className="tm-belofte-item">
                <div className="tm-belofte-num">03</div>
                <h3 className="tm-belofte-title">Direct met de oprichter.</h3>
                <p className="tm-belofte-desc">
                  Geen accountmanagers, geen junior developers, geen tussenlagen.
                  U werkt rechtstreeks met Tigran — van de eerste call tot
                  oplevering. Iedereen die u spreekt, beslist mee.
                </p>
              </div>
              <div className="tm-belofte-item">
                <div className="tm-belofte-num">04</div>
                <h3 className="tm-belofte-title">U houdt de sleutel.</h3>
                <p className="tm-belofte-desc">
                  De code is van u. De hosting staat op uw naam. Het CMS draait
                  op uw infrastructuur. Op elk moment kunt u zonder ons verder —
                  een andere developer, een eigen team, een nieuwe richting.
                  Wij verdienen uw terugkomst, niet uw afhankelijkheid.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="filter-section">
          <div className="tm-section">
            <h2 className="tm-section-title">Eerlijk over wie wij helpen.</h2>
            <div className="tm-filter-grid">
              <div className="tm-filter-col">
                <p className="tm-filter-label">Wij werken graag met</p>
                <ul className="tm-filter-list">
                  <li>Ondernemers die hun merk serieus nemen</li>
                  <li>Bedrijven met een visie, niet alleen een wens</li>
                  <li>Wie kwaliteit als investering ziet, niet als kost</li>
                  <li>Mensen die openstaan voor eerlijk advies</li>
                </ul>
              </div>
              <div className="tm-filter-col">
                <p className="tm-filter-label">Wij zijn niet de juiste keuze voor</p>
                <ul className="tm-filter-list tm-filter-list--no">
                  <li>Wie de laagste prijs als criterium gebruikt</li>
                  <li>Wie een standaard template voldoende vindt</li>
                  <li>Wie niet bereid is om content aan te leveren</li>
                  <li>Wie zijn merk niet als prioriteit ziet</li>
                </ul>
              </div>
            </div>
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
