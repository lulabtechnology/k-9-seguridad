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
          <p>Atención para entornos de logística, bodegas, puertos, transporte y operaciones comerciales dentro de Colón y Zona Libre.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Cobertura comercial"
            title="Sectores donde el control preventivo puede hacer la diferencia."
            text="Cada sector requiere controles distintos: acceso, inspección, verificación de carga, custodia preventiva y seguimiento operativo."
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
            eyebrow="Servicios relacionados"
            title="Cada sector puede requerir una combinación distinta de servicios."
            text="La empresa puede atender necesidades puntuales según el tipo de mercancía, ubicación, riesgo operativo y proceso logístico del cliente."
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
