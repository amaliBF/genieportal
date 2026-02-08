import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://genieportal.de';
  const now = new Date().toISOString();

  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/bereiche', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/fuer-unternehmen', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/konzept', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kontakt', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/impressum', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/agb', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
