import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionIntro } from '@/components/SectionIntro';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios de vigilancia e inspección K9',
  description:
    'Servicios de vigilancia en bodegas, inspección K9 de cargas, inspección de contenedores, seguridad logística y verificación de mercancía dañada en Colón y Panamá.'
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
          <h1>Vigilancia, inspección K9 y control de mercancía para empresas logísticas.</h1>
          <p>Servicios diseñados para atraer búsquedas específicas de clientes que necesitan seguridad en bodegas, puertos, contenedores, camiones y carga comercial.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Soluciones especializadas"
            title="Cada servicio tiene su propia página SEO para competir mejor en Google."
            text="La estructura evita depender de una sola página y permite posicionar búsquedas por tipo de necesidad, sector y ubicación."
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
