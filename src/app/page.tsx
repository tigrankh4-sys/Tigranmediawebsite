import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Sections from '@/components/Sections';
import { JsonLd } from '@/components/JsonLd';
import { faqs } from '@/data/content';

export const metadata: Metadata = {
  title: {
    absolute: "Tigran Media — Webdesign voor Vlaamse KMO's",
  },
  alternates: {
    canonical: 'https://tigranmedia.be/',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tigran Media',
  url: 'https://tigranmedia.be',
  description: "Custom webdesign voor Vlaamse KMO's. Vanaf €500. 99/100 Google score. Live in 1 week.",
  inLanguage: 'nl-BE',
  publisher: { '@id': 'https://tigranmedia.be/#organization' },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://tigranmedia.be/#organization',
  name: 'Tigran Media',
  url: 'https://tigranmedia.be',
  logo: 'https://tigranmedia.be/logo.svg',
  image: 'https://tigranmedia.be/images/forest-bean.webp',
  description: "Custom webdesign voor Vlaamse KMO's. Vanaf €500. 99/100 Google score. Live in 1 week.",
  telephone: '+32474114899',
  email: 'info@tigranmedia.be',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Turnhout',
    addressRegion: 'Antwerpen',
    postalCode: '2300',
    addressCountry: 'BE',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Vlaanderen' },
    { '@type': 'Country', name: 'België' },
  ],
  serviceType: 'Webdesign',
  priceRange: '€€',
  vatID: 'BE1035.278.921',
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  }],
  inLanguage: 'nl-BE',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tigranmedia.be/' },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={businessSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Hero />
      <Sections />
    </>
  );
}
