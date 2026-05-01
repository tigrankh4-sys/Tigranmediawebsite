'use client';

import { useEffect } from 'react';


export default function Hero() {
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 0.7, ease: 'power2.out' });
      gsap.from('.tm-nav', { y: -30, opacity: 0, duration: 0.5 });
      gsap.from('.hero-headline', { y: 40, opacity: 0, delay: 0.3 });
      gsap.from('.hero-line', { scaleX: 0, opacity: 0, delay: 0.5, transformOrigin: 'left' });
      gsap.from('.hero-subline', { y: 20, opacity: 0, delay: 0.6 });
      gsap.from('.hero-label', { opacity: 0, delay: 0.8 });
    };
    loadGSAP();
  }, []);

  return (
    <>
      <div className="tm-root">
        <nav className="tm-nav">
          <a href="/"><img src="/logo.svg" alt="Tigran Media" className="tm-nav-logo" width={123} height={28} /></a>
          <div className="tm-nav-links">
            <a href="#werkwijze">Werkwijze</a>
            <a href="#projecten">Projecten</a>
            <a href="#prijzen">Prijzen</a>
            <a href="/blog">Blog</a>
          </div>
          <a href="#contact" className="tm-nav-btn">Gratis Discovery Call →</a>
        </nav>

        <section className="tm-hero">
          <div className="tm-hero-inner">
            <div className="tm-hero-left">
              <h1 className="tm-headline hero-headline">
                Uw concurrenten hebben een website.<br />
                U heeft een probleem.
              </h1>
              <hr className="tm-line hero-line" />
              <p className="tm-subline hero-subline">Webdesign voor Vlaamse KMO&apos;s. Vanaf €500 — Live in 1 week.</p>
            </div>
            <div className="tm-vertical hero-label">STUDIO KEMPEN / EST. 2024</div>
          </div>
        </section>
      </div>
    </>
  );
}
