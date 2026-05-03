'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getDiscoveryCallHref, hasDirectBooking } from '@/config/site';


export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(async () => {
      const { gsap } = await import('gsap');
      gsap.defaults({ duration: 0.7, ease: 'power2.out' });
      gsap.from('.tm-nav', { y: -30, duration: 0.5 });
      gsap.from('.hero-subline', { y: -10, opacity: 0, delay: 0.2 });
      gsap.from('.hero-headline', { y: 20, delay: 0.4 });
      gsap.from('.hero-label', { y: 10, delay: 0.7 });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 380);
  };

  const toggle = () => {
    if (menuOpen && !menuClosing) close();
    else if (!menuOpen) setMenuOpen(true);
  };

  return (
    <>
      <nav className="tm-nav">
        <a href="/"><Image src="/logo.svg" alt="Tigran Media" className="tm-nav-logo" width={123} height={28} priority /></a>
        <div className="tm-nav-links">
          <a href="#werkwijze">Werkwijze</a>
          <a href="#projecten">Projecten</a>
          <a href="#prijzen">Prijzen</a>
          <a href="/blog">Blog</a>
        </div>
        <a href={getDiscoveryCallHref()} {...(hasDirectBooking ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="tm-nav-btn">Gratis Discovery Call →</a>
        <button className={`tm-hamburger${menuOpen && !menuClosing ? ' tm-hamburger-active' : ''}`} onPointerDown={(e) => { e.preventDefault(); toggle(); }} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className={`tm-mobile-menu${menuClosing ? ' tm-mobile-menu-closing' : ''}`}>
          <a href="#werkwijze" onClick={close}>Werkwijze</a>
          <a href="#projecten" onClick={close}>Projecten</a>
          <a href="#prijzen" onClick={close}>Prijzen</a>
          <a href="/blog" onClick={close}>Blog</a>
          <a href={getDiscoveryCallHref()} {...(hasDirectBooking ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="tm-mobile-cta" onClick={close}>Gratis Discovery Call →</a>
        </div>
      )}

      <div className="tm-root">
        <section className="tm-hero">
          <div className="tm-hero-inner">
            <div className="tm-hero-left">
              <p className="tm-subline hero-subline">Custom Next.js — Vaste prijs vanaf €500 — Live in 7 dagen</p>
              <h1 className="tm-headline hero-headline">
                Professioneel webdesign voor Vlaamse KMO's.<br />
                Geen templates. Een echte website.
              </h1>
            </div>
            <div className="tm-vertical hero-label">STUDIO KEMPEN / EST. 2024</div>
          </div>
        </section>
      </div>
    </>
  );
}
