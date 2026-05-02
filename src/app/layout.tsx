import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F0F0F',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tigranmedia.be'),
  title: {
    default: "Tigran Media — Webdesign voor Vlaamse KMO's",
    template: '%s | Tigran Media',
  },
  description: "Custom webdesign voor Vlaamse KMO's. Vanaf €500. 99/100 Google score. Live in 1 week.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    siteName: 'Tigran Media',
    title: "Tigran Media — Webdesign voor Vlaamse KMO's",
    description: "Custom Next.js websites voor Vlaamse KMO's. Vanaf €500, live in 1 week, 99/100 Google score.",
    url: 'https://tigranmedia.be',
    images: [{ url: '/images/forest-bean.webp', width: 1024, height: 560, alt: "Tigran Media — Webdesign voor Vlaamse KMO's" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tigran Media — Webdesign voor Vlaamse KMO's",
    description: "Custom Next.js websites voor Vlaamse KMO's. Vanaf €500, live in 1 week.",
    images: ['/images/forest-bean.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" as="font" href="/fonts/archivo-black-latin.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/dm-mono-400-latin.woff2" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
