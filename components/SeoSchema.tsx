import { services, site } from '@/lib/site';

export function SeoSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id': `${site.domain}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.domain,
        logo: `${site.domain}${site.logo}`,
        image: `${site.domain}/images/k9/og-k9-security.jpg`,
        description: site.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'France Field, Ave. 4, Zona Libre de Colón',
          addressLocality: 'Colón',
          addressCountry: 'PA'
        },
        areaServed: ['Colón', 'Zona Libre de Colón', 'Panamá'],
        knowsAbout: [
          'Seguridad logística',
          'Inspección K9 de cargas',
          'Vigilancia en bodegas',
          'Inspección de contenedores',
          'Seguridad para puertos'
        ]
      },
      ...services.map((service) => ({
        '@type': 'Service',
        name: service.title,
        description: service.summary,
        provider: { '@id': `${site.domain}/#organization` },
        areaServed: ['Panamá', 'Colón', 'Zona Libre de Colón'],
        url: `${site.domain}/servicios/${service.slug}`
      }))
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
