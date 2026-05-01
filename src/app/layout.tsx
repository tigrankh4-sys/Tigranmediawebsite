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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=DM+Mono&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=DM+Mono&display=swap" media="print" id="gfonts" />
        <script dangerouslySetInnerHTML={{ __html: `document.getElementById('gfonts').onload=function(){this.media='all'}` }} />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=DM+Mono&display=swap" /></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
