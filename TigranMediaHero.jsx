import React from 'react';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=DM+Mono&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @keyframes slideInDown {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0);     opacity: 1; }
  }

  @keyframes fadeUp {
    from { transform: translateY(40px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }

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
    animation: slideInDown 300ms cubic-bezier(0.16, 1, 0.3, 1) both;
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
    animation: fadeUp 500ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both;
  }

  .tm-line {
    width: 100%;
    height: 1px;
    background: #F0EBE0;
    border: none;
    margin-top: 36px;
    animation: fadeUp 500ms cubic-bezier(0.16, 1, 0.3, 1) 300ms both;
  }

  .tm-subline {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    margin-top: 20px;
    animation: fadeUp 500ms cubic-bezier(0.16, 1, 0.3, 1) 300ms both;
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
    animation: fadeUp 500ms cubic-bezier(0.16, 1, 0.3, 1) 500ms both;
  }

  @media (max-width: 768px) {
    .tm-nav {
      padding: 18px 24px;
    }

    .tm-nav-links {
      display: none;
    }

    .tm-hero {
      padding: 24px;
    }

    .tm-headline {
      font-size: clamp(48px, 9vw, 130px);
    }

    .tm-vertical {
      display: none;
    }
  }
`;

export default function TigranMediaHero() {
  return (
    <>
      <style>{css}</style>
      <div className="tm-root">
        <nav className="tm-nav">
          <img src="/logo.svg" alt="Tigran Media" className="tm-nav-logo" />
          <div className="tm-nav-links">
            <a href="#werkwijze">Werkwijze</a>
            <a href="#projecten">Projecten</a>
            <a href="#prijzen">Prijzen</a>
            <a href="/blog">Blog</a>
          </div>
          <button className="tm-nav-btn">Gratis Discovery Call →</button>
        </nav>

        <section className="tm-hero">
          <div className="tm-hero-inner">
            <div className="tm-hero-left">
              <h1 className="tm-headline">
                Uw concurrenten hebben een website.<br />
                U heeft een probleem.
              </h1>
              <hr className="tm-line" />
              <p className="tm-subline">Webdesign voor Vlaamse KMO's. Vanaf €500.</p>
            </div>
            <div className="tm-vertical">STUDIO KEMPEN / EST. 2024</div>
          </div>
        </section>
      </div>
    </>
  );
}
