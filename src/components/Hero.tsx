'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { getDiscoveryCallHref, hasDirectBooking } from '@/config/site';


export default function Hero() {
  useEffect(() => {
    const raf = requestAnimationFrame(async () => {
      const { gsap } = await import('gsap');
      gsap.defaults({ duration: 0.7, ease: 'power2.out' });
      gsap.from('.tm-nav', { y: -30, duration: 0.5 });
      gsap.from('.hero-headline', { y: 20, delay: 0.3 });
      gsap.from('.hero-line', { scaleX: 0, delay: 0.5, transformOrigin: 'left' });
      gsap.from('.hero-subline', { y: 20, delay: 0.6 });
      gsap.from('.hero-label', { y: 10, delay: 0.8 });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="tm-root">
        <nav className="tm-nav">
          <a href="/"><Image src="/logo.svg" alt="Tigran Media" className="tm-nav-logo" width={123} height={28} priority /></a>
          <div className="tm-nav-links">
            <a href="#werkwijze">Werkwijze</a>
            <a href="#projecten">Projecten</a>
            <a href="#prijzen">Prijzen</a>
          </div>
          <a href={getDiscoveryCallHref()} {...(hasDirectBooking ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="tm-nav-btn">Gratis Discovery Call →</a>
        </nav>

        <section className="tm-hero">
          <div className="tm-hero-inner">
            <div className="tm-hero-left">
              <h1 className="tm-headline hero-headline">
                Uw concurrenten kochten een template.<br />
                Wij bouwen u een echte website.
              </h1>
              <hr className="tm-line hero-line" />
              <p className="tm-subline hero-subline">Custom Next.js — Vaste prijs vanaf €500 — Live in 7 dagen</p>
            </div>
            <div className="tm-vertical hero-label">STUDIO KEMPEN / EST. 2024</div>
          </div>
        </section>
      </div>
    </>
  );
}
