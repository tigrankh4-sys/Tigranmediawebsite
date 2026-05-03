import type { MetadataRoute } from 'next';
import { steden } from '@/data/steden';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tigranmedia.be';
  const staticDate = new Date('2026-02-01');

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${base}/images/forest-bean-cover.webp`,
        `${base}/images/forest-bean.webp`,
        `${base}/images/tigran-profiel.webp`,
      ],
    },
    {
      url: `${base}/blog/`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/blog/waarom-uw-website-onzichtbaar-is/`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/wat-kost-een-website-belgie/`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/wordpress-vs-nextjs-voor-kmo/`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/eerste-indruk-website-klanten/`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/lokale-vindbaarheid-kmo-google/`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/algemene-voorwaarden/`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/privacybeleid/`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...steden.map((s) => ({
      url: `${base}/webdesign/${s.slug}/`,
      lastModified: staticDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: [`${base}/images/forest-bean.webp`],
    })),
  ];
}
