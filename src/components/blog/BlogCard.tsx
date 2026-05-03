import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blogPosts';

interface Props {
  post: BlogPost;
  featured?: boolean;
}

function formatDate(iso: string): string {
  const months = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BlogCard({ post, featured = false }: Props) {
  const href = `/blog/${post.slug}/`;
  const imgSrc = `https://source.unsplash.com/1200x630/?${post.imageKeyword}`;

  if (featured) {
    return (
      <Link href={href} className="blog-card-featured">
        <div className="blog-card-featured-img">
          <Image
            src={imgSrc}
            alt={post.title}
            width={1200}
            height={630}
            unoptimized
            priority
          />
        </div>
        <div className="blog-card-featured-body">
          <div className="blog-card-meta">
            <span className="blog-card-cat">{post.category}</span>
            <span className="blog-card-dot">·</span>
            <span>{formatDate(post.date)}</span>
            <span className="blog-card-dot">·</span>
            <span>{post.readTime} min lezen</span>
          </div>
          <h2 className="blog-card-featured-title">{post.title}</h2>
          <p className="blog-card-featured-excerpt">{post.excerpt}</p>
          <span className="blog-card-link">Lees artikel →</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="blog-card">
      <div className="blog-card-img">
        <Image
          src={imgSrc}
          alt={post.title}
          width={800}
          height={450}
          unoptimized
        />
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-card-cat">{post.category}</span>
          <span className="blog-card-dot">·</span>
          <span>{post.readTime} min lezen</span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <span className="blog-card-link">Lees artikel →</span>
      </div>
    </Link>
  );
}
