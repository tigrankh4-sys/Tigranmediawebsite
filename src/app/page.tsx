import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Sections from '@/components/Sections';
import { JsonLd } from '@/components/JsonLd';

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
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Tigran Media',
  url: 'https://tigranmedia.be',
  description: "Custom webdesign voor Vlaamse KMO's.",
  areaServed: {
    '@type': 'Country',
    name: 'België',
  },
  serviceType: 'Webdesign',
  priceRange: '€€',
  inLanguage: 'nl-BE',
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={businessSchema} />
      <Hero />
      <Sections />
    </>
  );
}
