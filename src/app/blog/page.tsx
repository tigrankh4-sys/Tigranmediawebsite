import type { Metadata } from 'next';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { getDiscoveryCallHref, hasDirectBooking } from '@/config/site';

export const metadata: Metadata = {
  title: { absolute: "Blog — Webdesign & SEO voor KMO's | Tigran Media" },
  description: "Praktische artikelen over webdesign, SEO en online vindbaarheid voor Belgische KMO's. Geen theorie, gewoon wat werkt.",
  alternates: { canonical: 'https://tigranmedia.be/blog/' },
  openGraph: {
    title: "Blog — Webdesign & SEO voor KMO's | Tigran Media",
    description: "Praktische artikelen over webdesign, SEO en online vindbaarheid voor Belgische KMO's. Geen theorie, gewoon wat werkt.",
    url: 'https://tigranmedia.be/blog/',
    type: 'website',
    locale: 'nl_BE',
    siteName: 'Tigran Media',
    images: [{ url: '/images/forest-bean.webp', width: 1024, height: 560, alt: "Blog Tigran Media" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog — Webdesign & SEO voor KMO's | Tigran Media",
    description: "Praktische artikelen over webdesign, SEO en online vindbaarheid voor Belgische KMO's.",
    images: ['/images/forest-bean.webp'],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://tigranmedia.be/blog/',
  name: "Tigran Media Blog",
  description: "Praktische artikelen over webdesign, SEO en online vindbaarheid voor Belgische KMO's.",
  url: 'https://tigranmedia.be/blog/',
  inLanguage: 'nl-BE',
  publisher: { '@id': 'https://tigranmedia.be/#organization' },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    url: `https://tigranmedia.be/blog/${post.slug}/`,
    author: { '@type': 'Person', name: 'Tigran' },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tigranmedia.be/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tigranmedia.be/blog/' },
  ],
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav className="tm-nav">
        <a href="/"><Image src="/logo.svg" alt="Tigran Media" className="tm-nav-logo" width={123} height={28} priority /></a>
        <div className="tm-nav-links">
          <a href="/#werkwijze">Werkwijze</a>
          <a href="/#projecten">Projecten</a>
          <a href="/#prijzen">Prijzen</a>
          <a href="/blog/">Blog</a>
        </div>
        <a href={getDiscoveryCallHref()} {...(hasDirectBooking ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="tm-nav-btn">Gratis Discovery Call →</a>
      </nav>

      <div className="tm-root">
        <section className="tm-hero blog-index-hero">
          <div className="tm-hero-inner">
            <div className="tm-hero-left">
              <p className="tm-subline">Blog — Webdesign, SEO &amp; strategie</p>
              <h1 className="tm-headline">
                Wat werkt voor uw<br />website. Eerlijk uitgelegd.
              </h1>
            </div>
            <div className="tm-vertical">JOURNAL / TIGRAN MEDIA</div>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="tm-section">
            <BlogCard post={featured} featured />
            <div className="blog-grid">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
