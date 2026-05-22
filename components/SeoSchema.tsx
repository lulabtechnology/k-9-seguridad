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
        areaServed: areas,
        knowsAbout: [
          'Seguridad logística',
          'Inspección K9 de cargas',
          'Vigilancia 24 horas',
          'Custodia de mercancía y transportes',
          'Inspección de contenedores',
          'Seguridad para puertos y aeropuertos'
        ]
      },
      ...services.map((service) => ({
        '@type': 'Service',
        name: service.title,
        description: service.summary,
        provider: { '@id': `${site.domain}/#organization` },
        areaServed: areas,
        url: `${site.domain}/servicios/${service.slug}`
      }))
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
