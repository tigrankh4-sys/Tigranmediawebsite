import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://tigranmedia.be"),
  title: "Tigran Media — Webdesign voor Vlaamse KMO's",
  description: "Custom webdesign voor Vlaamse KMO's. Vanaf €500. 99/100 Google score. Live in 1 week.",
  openGraph: {
    title: "Tigran Media — Webdesign voor Vlaamse KMO's",
    description: "Custom Next.js websites voor Vlaamse KMO's. Vanaf €500, live in 1 week, 99/100 Google score.",
    url: "https://tigranmedia.be",
    type: "website",
    images: ["/images/forest-bean.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tigran Media — Webdesign voor Vlaamse KMO's",
    description: "Custom Next.js websites voor Vlaamse KMO's. Vanaf €500, live in 1 week.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" as="font" href="/fonts/cormorant-garamond-300-latin.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/dm-mono-400-latin.woff2" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
