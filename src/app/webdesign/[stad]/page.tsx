import { Metadata } from 'next';
import { steden } from '@/data/steden';
import { cityContent } from '@/data/cityContent';
import Image from 'next/image';
import StadSections from '@/components/StadSections';
import { JsonLd } from '@/components/JsonLd';
import { getDiscoveryCallHref, hasDirectBooking } from '@/config/site';

function buildDescription(base: string): string {
  const cta = 'Plan gratis een discovery call.';
  const clean = base.replace(/\s*(Gratis discovery call\.|Plan gratis een discovery call\.)$/, '').trimEnd();
  const full = `${clean} ${cta}`;
  if (full.length <= 155) return full;
  const limit = 155 - cta.length - 1;
  const truncated = clean.substring(0, limit);
  const lastPeriod = truncated.lastIndexOf('.');
  const shortened = lastPeriod > 80 ? clean.substring(0, lastPeriod + 1) : truncated.substring(0, truncated.lastIndexOf(' '));
  return `${shortened} ${cta}`;
}

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
  const description = buildDescription(stad.metaDescription);
  return {
    title: { absolute: stad.metaTitle },
    description,
    alternates: {
      canonical: `https://tigranmedia.be/webdesign/${slug}/`,
    },
    openGraph: {
      title: stad.metaTitle,
      description,
      url: `https://tigranmedia.be/webdesign/${slug}/`,
      type: 'website',
      locale: 'nl_BE',
      siteName: 'Tigran Media',
      images: [{ url: '/images/forest-bean.webp', width: 1024, height: 560, alt: stad.metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: stad.metaTitle,
      description,
      images: ['/images/forest-bean.webp'],
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://tigranmedia.be/#organization',
    name: 'Tigran Media',
    url: `https://tigranmedia.be/webdesign/${slug}/`,
    logo: 'https://tigranmedia.be/logo.svg',
    image: 'https://tigranmedia.be/images/forest-bean.webp',
    description: stad.metaDescription,
    telephone: '+32474114899',
    email: 'info@tigranmedia.be',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Turnhout',
      addressRegion: 'Antwerpen',
      postalCode: '2300',
      addressCountry: 'BE',
    },
    areaServed: {
      '@type': 'City',
      name: stad.naam,
    },
    serviceType: 'Webdesign',
    priceRange: '€€',
    vatID: 'BE1035.278.921',
    inLanguage: 'nl-BE',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tigranmedia.be/' },
      { '@type': 'ListItem', position: 2, name: 'Webdesign', item: 'https://tigranmedia.be/webdesign/' },
      { '@type': 'ListItem', position: 3, name: stad.naam, item: `https://tigranmedia.be/webdesign/${slug}/` },
    ],
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <nav className="nav">
        <a href="/"><Image src="/logo.svg" alt="Tigran Media" className="nav-logo" width={123} height={28} priority /></a>
        <div className="nav-links">
          <a href="/#werkwijze">Werkwijze</a>
          <a href="/#projecten">Projecten</a>
          <a href="/#prijzen">Prijzen</a>
        </div>
        <a href={getDiscoveryCallHref()} {...(hasDirectBooking ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="nav-btn">Gratis Discovery Call →</a>
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
            <div className="stat-value">5.0</div>
            <div className="stat-label">Google Rating</div>
          </div>
          <div className="stat">
            <div className="stat-value">99/100</div>
            <div className="stat-label">PageSpeed</div>
          </div>
          <div className="stat">
            <div className="stat-value">7 dagen</div>
            <div className="stat-label">Tot live</div>
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
