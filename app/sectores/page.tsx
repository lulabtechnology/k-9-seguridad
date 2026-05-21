import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionIntro } from '@/components/SectionIntro';
import { sectors, services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sectores atendidos: logística, bodegas, puertos y Zona Libre',
  description:
    'K9 Security International atiende empresas logísticas, bodegas, puertos, transporte terrestre, carga aérea y operaciones dentro de la Zona Libre de Colón.'
};

export default function SectoresPage() {
  return (
    <>
      <section className="page-hero page-hero--sectores">
        <div className="page-hero__media">
          <Image src="/images/k9/inspeccion-puerto.webp" alt="Inspección de carga terrestre en Panamá" fill priority sizes="100vw" />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="eyebrow">Sectores atendidos</span>
          <h1>Seguridad para empresas que mueven mercancía de importación y exportación.</h1>
          <p>La web está estructurada para responder a necesidades reales de logística, bodegas, puertos, transporte y operaciones dentro de Colón.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Cobertura comercial"
            title="Sectores donde el control preventivo puede hacer la diferencia."
            text="Cada bloque comunica una aplicación concreta de los servicios y ayuda a Google a entender el alcance de la empresa."
            align="center"
          />
          <div className="sector-grid sector-grid--wide">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article className="sector-card" key={sector.title}>
                  <Icon size={32} />
                  <h3>{sector.title}</h3>
                  <p>{sector.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container split-grid">
          <SectionIntro
            eyebrow="Enlaces internos para SEO"
            title="Las páginas de servicio conectan sectores con búsquedas específicas."
            text="Esta arquitectura ayuda a competir contra sitios que solo tienen una página general sin contenido por servicio."
          />
          <div className="link-list-panel">
            {services.map((service) => (
              <Link href={`/servicios/${service.slug}`} key={service.slug}>
                {service.title} <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
