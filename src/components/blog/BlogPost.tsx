import Link from 'next/link';
import type { BlogPost as BlogPostType } from '@/data/blogPosts';

interface Props {
  post: BlogPostType;
}

function formatDate(iso: string): string {
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BlogPost({ post }: Props) {
  const heroImg = `https://source.unsplash.com/1600x900/?${post.imageKeyword}`;
  const paragraphs = post.content.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <section
        className="blog-hero"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.85) 100%), url(${heroImg})` }}
      >
        <div className="blog-hero-inner">
          <Link href="/blog/" className="blog-back">← Terug naar blog</Link>
          <div className="blog-hero-meta">
            <span className="blog-hero-cat">{post.category}</span>
            <span className="blog-hero-dot">·</span>
            <span>{formatDate(post.date)}</span>
            <span className="blog-hero-dot">·</span>
            <span>{post.readTime} min lezen</span>
          </div>
          <h1 className="blog-hero-title">{post.title}</h1>
          <p className="blog-hero-excerpt">{post.excerpt}</p>
        </div>
      </section>

      <article className="blog-prose">
        <div className="blog-prose-inner">
          {paragraphs.map((para, i) => (
            <p key={i} className="blog-p">{para}</p>
          ))}
        </div>
      </article>

      <section className="blog-cta">
        <div className="blog-cta-inner">
          <p className="blog-cta-eyebrow">Volgende stap</p>
          <h2 className="blog-cta-title">Klaar om uw website serieus aan te pakken?</h2>
          <p className="blog-cta-sub">Geen verkooppraatje. Een eerlijk gesprek over wat uw bedrijf werkelijk nodig heeft.</p>
          <Link href={post.ctaUrl} className="blog-cta-btn">{post.ctaText}</Link>
        </div>
      </section>
    </>
  );
}
