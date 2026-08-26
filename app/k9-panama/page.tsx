import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Dog, MapPin, ShieldCheck, Truck, Warehouse } from 'lucide-react';
import { SectionIntro } from '@/components/SectionIntro';
import { coverageZones, services, site, whatsappHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'K9 Panamá | Seguridad K9 y custodia logística en Panamá',
  description:
    'K9 Security International, S.A. ofrece seguridad K9 en Panamá: inspección canina de cargas, vigilancia 24 horas, custodia de mercancía y seguridad logística para bodegas, puertos, contenedores y empresas.',
  keywords: [
    'k9 panama',
    'k9 panamá',
    'k9 security panama',
    'k9 security panamá',
    'seguridad k9 panamá',
    'empresa de seguridad k9 en Panamá',
    'inspección k9 de cargas Panamá',
    'custodia de mercancía Panamá',
    'seguridad logística Panamá'
  ],
  alternates: {
    canonical: '/k9-panama'
  },
  openGraph: {
    title: 'K9 Panamá | Seguridad K9 para empresas y operaciones logísticas',
    description:
      'Servicios K9 en Panamá para inspección de cargas, vigilancia de bodegas, custodia de mercancía y seguridad logística en Colón y a nivel nacional.',
    url: '/k9-panama',
    images: [{ url: '/images/k9/og-k9-security.jpg', width: 1200, height: 630 }]
  }
};

const focusAreas = [
  {
    title: 'Seguridad K9 Panamá',
    text: 'Servicio para empresas que buscan presencia preventiva, inspección canina y control operativo en instalaciones, bodegas y áreas de carga.',
    icon: Dog
  },
  {
    title: 'Inspección K9 para carga en Panamá',
    text: 'Enfoque comercial y operativo para cargas de importación, exportación, contenedores, furgones, camiones y mercancía en tránsito.',
    icon: Truck
  },
  {
    title: 'K9 Security International en Colón',
    text: 'Base estratégica en France Field, Zona Libre de Colón, con atención para puntos logísticos de Panamá y operaciones nacionales.',
    icon: MapPin
  }
];

const commercialUses = [
  'Inspección K9 de cargas en bodegas, patios, puertos, contenedores, camiones y furgones.',
  'Vigilancia 24 horas para empresas, zonas francas, parques industriales y áreas de almacenamiento.',
  'Custodia de mercancía y transportes hacia puertos, aeropuertos, bodegas y rutas logísticas.',
  'Apoyo preventivo para importadores, exportadores, operadores logísticos y empresas con carga crítica.'
];

export default function K9PanamaPage() {

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.domain}/k9-panama/#webpage`,
    url: `${site.domain}/k9-panama`,
    name: 'K9 Panamá | Seguridad K9 en Panamá',
    description:
      'Página enfocada en servicios de seguridad K9 en Panamá, inspección canina de cargas, custodia de mercancía y vigilancia para empresas logísticas.',
    isPartOf: { '@id': `${site.domain}/#website` },
    about: { '@id': `${site.domain}/#organization` },
    disambiguatingDescription: site.identityDescription,
    inLanguage: 'es-PA',
    mainEntity: commercialUses.map((item) => ({
      '@type': 'Service',
      name: item,
      provider: { '@id': `${site.domain}/#organization` },
      areaServed: ['Panamá', 'Colón', 'Zona Libre de Colón']
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="page-hero page-hero--empresa">
        <div className="page-hero__media">
          <Image src="/images/k9/hero-operativo.webp" alt="Seguridad K9 Panamá para inspección de cargas y operaciones logísticas" fill priority sizes="100vw" />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="eyebrow"><ShieldCheck size={18} /> K9 Panamá</span>
          <h1>K9 Panamá: seguridad K9, custodia e inspección de cargas para empresas.</h1>
          <p>
            K9 Security International, S.A. es una empresa de seguridad K9 en Panamá enfocada en vigilancia 24 horas,
            inspección canina de cargas, custodia de mercancía y seguridad logística para bodegas, puertos, contenedores,
            furgones, camiones y operaciones de alto movimiento.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container split-grid split-grid--center">
          <SectionIntro
            eyebrow="Identidad: K9 Security International"
            title="Una empresa especializada para operaciones que necesitan seguridad K9 en Panamá."
            text="Para búsquedas como ‘K9 Security Panamá’ o ‘K9 Panamá’, este sitio corresponde a K9 Security International, S.A., empresa con identidad corporativa propia y base operativa en Colón. Sus servicios se enfocan en prevención, custodia, inspección K9 y control de mercancía."
          />
          <div className="info-card info-card--strong">
            <Building2 size={34} />
            <h3>{site.legalName}</h3>
            <p>{site.location}</p>
            <Link className="text-link" href={whatsappHref('Hola, deseo información sobre servicios K9 Panamá para mi empresa.')}>Solicitar información K9 Panamá</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Servicios K9 en Panamá"
            title="Qué debe encontrar una empresa cuando busca K9 Panamá."
            text="Esta página reúne los servicios principales asociados a seguridad K9, inspección de cargas, custodia de mercancía y vigilancia para empresas logísticas en Panamá."
            align="center"
          />
          <div className="values-grid">
            {focusAreas.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={32} />
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container split-grid split-grid--center">
          <div>
            <span className="eyebrow eyebrow--gold">Enfoque comercial</span>
            <h2>Seguridad K9 para logística, bodegas, puertos, contenedores y transporte.</h2>
            <p>
              El objetivo es apoyar operaciones donde una empresa necesita control visible, prevención, acompañamiento y revisión
              especializada antes, durante o después del movimiento de mercancía.
            </p>
          </div>
          <div className="link-list-panel">
            {commercialUses.map((item) => (
              <div className="link-list-panel__item" key={item}>
                <ShieldCheck size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionIntro
            eyebrow="Servicios relacionados"
            title="Servicios especializados de K9 Security International para empresas en Panamá."
            text="Cada servicio cuenta con información específica para que el cliente identifique la solución adecuada según su operación, carga, ubicación y nivel de control requerido."
            align="center"
          />
          <div className="cards-grid cards-grid--services">
            {services.slice(0, 6).map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="service-card__image">
                  <Image src={service.image} alt={`${service.title} en Panamá`} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="service-card__body">
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <Link href={`/servicios/${service.slug}`} className="text-link">Ver servicio <ArrowRight size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Cobertura"
            title="Cobertura para operaciones K9 en Panamá, Colón y puntos logísticos estratégicos."
            text="K9 Security International atiende empresas que necesitan seguridad K9, custodia y control preventivo en puntos estratégicos del país."
            align="center"
          />
          <div className="sector-grid">
            {coverageZones.map((zone) => {
              const Icon = zone.icon;
              return (
                <article className="sector-card" key={zone.title}>
                  <Icon size={30} />
                  <h3>{zone.title}</h3>
                  <p>{zone.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container final-cta">
          <Warehouse size={38} />
          <h2>¿Busca K9 Panamá para una operación comercial o logística?</h2>
          <p>
            Solicite información sobre inspección K9 de cargas, vigilancia, custodia de mercancía y seguridad logística para su empresa en Panamá.
          </p>
          <Link className="btn btn--primary" href={whatsappHref('Hola, busco servicios K9 Panamá para una operación comercial o logística.')}>
            Cotizar servicio K9 Panamá
          </Link>
        </div>
      </section>
    </>
  );
}
