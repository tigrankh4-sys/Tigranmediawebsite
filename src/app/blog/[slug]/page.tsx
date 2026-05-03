import type { Metadata } from 'next';
import Image from 'next/image';
import { blogPosts, getPostBySlug } from '@/data/blogPosts';
import BlogPost from '@/components/blog/BlogPost';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { getDiscoveryCallHref, hasDirectBooking } from '@/config/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://tigranmedia.be/blog/${post.slug}/`;
  const ogImage = `https://source.unsplash.com/1200x630/?${post.imageKeyword}`;

  return {
    title: { absolute: `${post.title} | Tigran Media` },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      locale: 'nl_BE',
      siteName: 'Tigran Media',
      publishedTime: post.date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div style={{ background: '#0F0F0F', color: '#F0EBE0', padding: '64px', fontFamily: 'monospace' }}>
        Artikel niet gevonden.
      </div>
    );
  }

  const url = `https://tigranmedia.be/blog/${post.slug}/`;
  const ogImage = `https://source.unsplash.com/1200x630/?${post.imageKeyword}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': url,
    headline: post.title,
    description: post.metaDescription,
    image: ogImage,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'nl-BE',
    author: { '@type': 'Person', name: 'Tigran', url: 'https://tigranmedia.be/' },
    publisher: { '@id': 'https://tigranmedia.be/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tigranmedia.be/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tigranmedia.be/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
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

      <BlogPost post={post} />

      <Footer />
    </>
  );
}
