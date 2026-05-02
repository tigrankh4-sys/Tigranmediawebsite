import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/projecten/', '/wijnen-waldo/'],
    },
    sitemap: 'https://tigranmedia.be/sitemap.xml',
  };
}
