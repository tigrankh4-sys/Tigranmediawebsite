import { Metadata } from 'next';
import { steden } from '@/data/steden';
import StadSections from '@/components/StadSections';

interface Props {
  params: Promise<{ stad: string }>;
}

export async function generateStaticParams() {
  return steden.map((s) => ({ stad: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stad: slug } = await params;
  const stad = steden.find((s) => s.slug === slug);
  if (!stad) return {};
  return {
    title: stad.metaTitle,
    description: stad.metaDescription,
  };
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=DM+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: #0F0F0F;
    color: #F0EBE0;
  }

  /* NAV */
  .nav {
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

  .nav-logo { height: 28px; width: auto; display: block; }

  .nav-links {
    display: flex;
    gap: 40px;
  }

  .nav-links a {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    text-decoration: none;
  }

  .nav-btn {
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
    text-decoration: none;
    display: inline-block;
  }

  .nav-btn:hover {
    box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a;
  }

  /* HERO */
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding: 64px;
  }

  .hero-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  .hero-left { flex: 1; display: flex; flex-direction: column; min-width: 0; }

  .headline {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(48px, 7vw, 110px);
    line-height: 1.0;
    color: #F0EBE0;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: #F0EBE0;
    border: none;
    margin-top: 36px;
  }

  .feit {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.65;
    margin-top: 20px;
    max-width: 640px;
    line-height: 1.7;
  }

  .vertical {
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

  /* STATS */
  .stats {
    border-top: 1px solid rgba(240, 235, 224, 0.15);
    padding: 80px 64px;
  }

  .stats-inner {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  .stat {
    padding: 0 48px;
    position: relative;
  }

  .stat:first-child { padding-left: 0; }
  .stat:last-child  { padding-right: 0; }

  .stat:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 1px; height: 100%;
    background: #F0EBE0;
    opacity: 0.2;
  }

  .stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(40px, 4vw, 64px);
    color: #F0EBE0;
    line-height: 1;
    margin-bottom: 8px;
  }

  .stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.6;
  }

  /* CTA */
  .cta-section {
    border-top: 1px solid rgba(240, 235, 224, 0.15);
    padding: 120px 64px;
    text-align: center;
    background: #0F0F0F;
  }

  .cta-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(40px, 5vw, 80px);
    color: #F0EBE0;
    margin-bottom: 48px;
  }

  .cta-btn {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    background: #0F0F0F;
    border: none;
    padding: 16px 36px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 4px 4px 10px #050505, -4px -4px 10px #1a1a1a;
    text-decoration: none;
    display: inline-block;
  }

  .cta-btn:hover {
    box-shadow: inset 4px 4px 10px #050505, inset -4px -4px 10px #1a1a1a;
  }

  /* FOOTER */
  .footer {
    border-top: 1px solid rgba(240, 235, 224, 0.15);
    padding: 32px 64px;
    text-align: center;
    background: #0F0F0F;
  }

  .footer p {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #F0EBE0;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    .nav { padding: 18px 24px; }
    .nav-links { display: none; }
    .hero { padding: 24px; }
    .vertical { display: none; }
    .stats { padding: 60px 24px; }
    .stats-inner { grid-template-columns: 1fr; gap: 40px; }
    .stat { padding: 0; }
    .stat::after { display: none !important; }
    .cta-section { padding: 80px 24px; }
    .footer { padding: 32px 24px; }
  }
`;

export default async function StadPage({ params }: Props) {
  const { stad: slug } = await params;
  const stad = steden.find((s) => s.slug === slug);

  if (!stad) {
    return <div style={{ background: '#0F0F0F', color: '#F0EBE0', padding: '64px', fontFamily: 'monospace' }}>Stad niet gevonden.</div>;
  }

  const verticalLabel = `WEBDESIGN ${stad.naam.toUpperCase()} / TIGRAN MEDIA`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <a href="/"><img src="/logo.svg" alt="Tigran Media" className="nav-logo" /></a>
        <div className="nav-links">
          <a href="/#werkwijze">Werkwijze</a>
          <a href="/#projecten">Projecten</a>
          <a href="/#prijzen">Prijzen</a>
          <a href="/blog">Blog</a>
        </div>
        <a href="/#contact" className="nav-btn">Gratis Discovery Call →</a>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="headline">
              Webdesign voor {stad.naam}<br />dat klanten brengt.
            </h1>
            <hr className="divider" />
            <p className="feit">{stad.feit}</p>
          </div>
          <div className="vertical">{verticalLabel}</div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-value">99/100</div>
            <div className="stat-label">Google score</div>
          </div>
          <div className="stat">
            <div className="stat-value">1 week</div>
            <div className="stat-label">Live</div>
          </div>
          <div className="stat">
            <div className="stat-value">€500</div>
            <div className="stat-label">Vanaf</div>
          </div>
        </div>
      </section>

      <StadSections stadNaam={stad.naam} />
    </>
  );
}
