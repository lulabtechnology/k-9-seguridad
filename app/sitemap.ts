import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const now = new Date();
  const staticRoutes = ['', '/k9-panama', '/empresa', '/servicios', '/sectores', '/basc', '/contacto'];
  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : route === '/k9-panama' ? 0.95 : 0.8
    })),
    ...services.map((service) => ({
      url: `${base}/servicios/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9
    }))
  ];
}
