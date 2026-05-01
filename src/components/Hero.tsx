'use client';

import { useEffect } from 'react';

const css = `
  .tm-root {
    position: relative;
    background: #0F0F0F;
    color: #F0EBE0;
    min-height: 100vh;
    overflow: hidden;
  }

  /* ── NAVBAR ── */
  .tm-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 64px;
    background: transparent;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .tm-nav-logo {
    height: 28px;
    width: auto;
    display: block;
  }

  .tm-nav-links {
    display: flex;
    gap: 40px;
  }

  .tm-nav-links a {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    text-decoration: none;
  }

  .tm-nav-btn {
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
  }

  .tm-nav-btn:hover {
    box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a;
  }

  /* ── HERO ── */
  .tm-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding: 64px;
  }

  .tm-hero-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  .tm-hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .tm-headline {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(56px, 9vw, 130px);
    line-height: 1.0;
    color: #F0EBE0;
    text-align: left;
  }

  .tm-line {
    width: 100%;
    height: 1px;
    background: #F0EBE0;
    border: none;
    margin-top: 36px;
  }

  .tm-subline {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    margin-top: 20px;
  }

  .tm-vertical {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    white-space: nowrap;
    margin-left: 64px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .tm-nav { padding: 18px 24px; }
    .tm-nav-links { display: none; }
    .tm-hero { padding: 24px; }
    .tm-headline { font-size: clamp(48px, 9vw, 130px); }
    .tm-vertical { display: none; }
  }
`;

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
      <style>{css}</style>
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
