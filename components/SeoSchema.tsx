import { services, site } from '@/lib/site';

export function SeoSchema() {
  const areas = [
    'Panamá',
    'Colón',
    'Zona Libre de Colón',
    'Panamá Pacífico',
    'Aeropuerto de Cargas en Tocumen',
    'Parques industriales'
  ];

  const organizationId = `${site.domain}/#organization`;
  const websiteId = `${site.domain}/#website`;
  const brandId = `${site.domain}/#brand`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Brand',
        '@id': brandId,
        name: site.shortName,
        alternateName: site.aliases,
        logo: `${site.domain}${site.logo}`,
        url: site.domain
      },
      {
        '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id': organizationId,
        name: site.name,
        legalName: site.legalName,
        alternateName: site.aliases,
        disambiguatingDescription: site.identityDescription,
        url: site.domain,
        logo: `${site.domain}${site.logo}`,
        image: `${site.domain}/images/k9/og-k9-security.jpg`,
        brand: { '@id': brandId },
        telephone: site.whatsapp,
        description: site.description,
        identifier: [
          {
            '@type': 'PropertyValue',
            propertyID: 'BASC certificate',
            value: site.basc.certificateNumber
          }
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.whatsapp,
          contactType: 'sales',
          areaServed: 'PA',
          availableLanguage: ['es']
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'France Field, Ave. 4, Zona Libre de Colón',
          addressLocality: 'Colón',
          addressRegion: 'Colón',
          addressCountry: 'PA'
        },
        areaServed: areas,
        knowsAbout: [
          'Seguridad K9 en Panamá',
          'Seguridad logística',
          'Inspección K9 de cargas',
          'Vigilancia 24 horas',
          'Custodia de mercancía y transportes',
          'Inspección de contenedores',
          'Seguridad para puertos y aeropuertos'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: site.domain,
        name: site.shortName,
        alternateName: site.aliases,
        publisher: { '@id': organizationId },
        inLanguage: 'es-PA'
      },
      ...services.map((service) => ({
        '@type': 'Service',
        '@id': `${site.domain}/servicios/${service.slug}#service`,
        name: service.title,
        description: service.summary,
        provider: { '@id': organizationId },
        areaServed: areas,
        url: `${site.domain}/servicios/${service.slug}`
      }))
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
