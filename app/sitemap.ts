import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const staticRoutes = ['', '/k9-panama', '/empresa', '/servicios', '/sectores', '/basc', '/contacto'];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`
    })),
    ...services.map((service) => ({
      url: `${base}/servicios/${service.slug}`
    }))
  ];
}
