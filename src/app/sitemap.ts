import type { MetadataRoute } from 'next';
import { steden } from '@/data/steden';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tigranmedia.be';
  const now = new Date();

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${base}/images/forest-bean-cover.webp`,
        `${base}/images/forest-bean.webp`,
        `${base}/images/tigran-profiel.webp`,
      ],
    },
    {
      url: `${base}/algemene-voorwaarden/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/privacybeleid/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...steden.map((s) => ({
      url: `${base}/webdesign/${s.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: [`${base}/images/forest-bean.webp`],
    })),
  ];
}
