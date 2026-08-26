import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionIntro } from '@/components/SectionIntro';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios de vigilancia, custodia e inspección K9',
  description:
    'Servicios de vigilancia 24 horas, custodia de mercancía, inspección K9 de cargas, inspección de contenedores y seguridad logística en Colón y Panamá.',
  alternates: {
    canonical: '/servicios'
  },
  openGraph: {
    url: '/servicios'
  }
};

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero page-hero--servicios">
        <div className="page-hero__media">
          <Image src="/images/k9/inspeccion-bodega.webp" alt="Unidad K9 inspeccionando carga en bodega" fill priority sizes="100vw" />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="eyebrow">Servicios</span>
          <h1>Vigilancia, custodia e inspección K9 para empresas logísticas y comerciales.</h1>
          <p>Servicios para empresas que necesitan vigilancia 24 horas, inspección de bodegas, custodia de contenedores, camiones y furgones, revisión K9 y control preventivo de mercancía.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Soluciones especializadas"
            title="Servicios especializados para operaciones logísticas sensibles."
            text="Cada solución se presenta con su aplicación operativa para que el cliente identifique rápidamente el apoyo que necesita en Colón o a nivel nacional."
            align="center"
          />
          <div className="cards-grid cards-grid--services">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
