import { Metadata } from 'next';
import { steden } from '@/data/steden';
import { cityContent } from '@/data/cityContent';
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
    alternates: {
      canonical: `https://tigranmedia.be/webdesign/${slug}/`,
    },
  };
}


export default async function StadPage({ params }: Props) {
  const { stad: slug } = await params;
  const stad = steden.find((s) => s.slug === slug);

  if (!stad) {
    return <div style={{ background: '#0F0F0F', color: '#F0EBE0', padding: '64px', fontFamily: 'monospace' }}>Stad niet gevonden.</div>;
  }

  const verticalLabel = `WEBDESIGN ${stad.naam.toUpperCase()} / TIGRAN MEDIA`;

  return (
    <>
<nav className="nav">
        <a href="/"><img src="/logo.svg" alt="Tigran Media" className="nav-logo" /></a>
        <div className="nav-links">
          <a href="/#werkwijze">Werkwijze</a>
          <a href="/#projecten">Projecten</a>
          <a href="/#prijzen">Prijzen</a>
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

      {cityContent[slug] && (
        <section className="stad-content">
          <div className="stad-content-inner">
            <h2 className="stad-content-h2">{cityContent[slug].h2}</h2>
            <p className="stad-content-intro">{cityContent[slug].intro}</p>
            {cityContent[slug].alineas.map((p, i) => (
              <p key={i} className="stad-content-p">{p}</p>
            ))}
          </div>
        </section>
      )}

      <StadSections stadNaam={stad.naam} />
    </>
  );
}
