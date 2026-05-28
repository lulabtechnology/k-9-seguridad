import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, MapPin, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { SectionIntro } from '@/components/SectionIntro';
import { ServiceCard } from '@/components/ServiceCard';
import { certifications, coverageZones, faqs, gallery, processSteps, sectors, services, site } from '@/lib/site';


export const metadata: Metadata = {
  title: 'K9 Panamá | Seguridad K9, vigilancia y custodia logística',
  description:
    'K9 Security International, S.A. ofrece seguridad K9 en Panamá, inspección canina de cargas, vigilancia 24 horas y custodia de mercancía para empresas logísticas, bodegas, puertos y contenedores.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'K9 Panamá | Seguridad K9 y custodia logística',
    description:
      'Empresa de seguridad K9 en Panamá para inspección de cargas, vigilancia de bodegas, custodia de mercancía y operaciones logísticas.',
    url: '/'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section section--light">
        <div className="container split-grid split-grid--center">
          <SectionIntro
            eyebrow="Empresa de seguridad K9 en Panamá"
            title="Especialistas en vigilancia, custodia e inspección K9 de cargas para operaciones de alto movimiento."
            text="K9 Security International, S.A. se presenta como una empresa de seguridad K9 en Panamá registrada en la DIASP, con servicios para bodegas, puertos, aeropuertos, rutas de carga, zonas francas y empresas que necesitan prevención, control operativo y verificación profesional."
          />
          <div className="feature-panel">
            <span className="feature-panel__label">Cobertura comercial</span>
            <h3>Servicio a nivel nacional en puntos clave de la cadena logística.</h3>
            <p>La oferta de servicio no se limita a la Zona Libre de Colón. También puede atender operaciones en Panamá Pacífico, aeropuerto de cargas en Tocumen, parques industriales, puertos y otros puntos estratégicos del país.</p>
            <Link href="/k9-panama" className="text-link">Ver servicios K9 Panamá <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Servicios principales"
            title="Control preventivo para mercancía, transportes, bodegas y operaciones logísticas."
            text="Soluciones enfocadas en seguridad 24 horas, inspección canina, custodia de contenedores, vigilancia en bodegas y verificación de mercancía para operaciones que requieren prevención real."
            align="center"
          />
          <div className="cards-grid cards-grid--services">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container process-grid">
          <div>
            <span className="eyebrow eyebrow--gold">Método de operación</span>
            <h2>Un proceso claro para intervenir sin desordenar la operación del cliente.</h2>
            <p>Cada servicio se coordina según el punto de revisión, el tipo de carga, la ruta, el horario y el nivel de control que requiere la empresa.</p>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="process-card" key={step.title}>
                  <span className="process-card__number">0{index + 1}</span>
                  <Icon size={26} />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionIntro
            eyebrow="Sectores atendidos"
            title="Atención para empresas de logística, comercio internacional y movimiento de mercancía."
            text="La operación atiende entornos donde la mercancía debe moverse con control, trazabilidad y presencia preventiva."
            align="center"
          />
          <div className="sector-grid">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article className="sector-card" key={sector.title}>
                  <Icon size={30} />
                  <h3>{sector.title}</h3>
                  <p>{sector.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Cobertura nacional"
            title="Principales zonas francas y puntos estratégicos donde puede coordinar su servicio."
            text="La web ahora deja claro que la oferta puede atender operaciones dentro y fuera de Colón, según la necesidad operativa del cliente."
            align="center"
          />
          <div className="sector-grid sector-grid--wide">
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

      <section className="section basc-band">
        <div className="container basc-band__grid">
          <div className="basc-band__image">
            <Image src={site.basc.image} alt="Certificado BASC de K9 Security International" width={660} height={820} />
          </div>
          <div>
            <span className="eyebrow"><Award size={18} /> Respaldo BASC</span>
            <h2>Control documentado bajo estándares internacionales de seguridad.</h2>
            <p>
              El certificado actualizado compartido por la empresa hace referencia a la Norma y Estándares Internacionales BASC, versión 6-2022, para servicios de custodia de seguridad, vigilancia privada e inspección canina en Colón y Panamá.
            </p>
            <div className="cert-grid">
              {certifications.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <Icon size={24} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
            <p className="note"><strong>Información documental:</strong> certificación No. PANPTY00074-1-2, expedida el 2025-11-22 bajo la Norma BASC International Norm and Standards, versión 6-2022.</p>
            <Link className="btn btn--secondary" href="/basc">Ver sección BASC</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Galería operativa"
            title="Imágenes reales de inspección, vigilancia, custodia y control de carga."
            text="Se incorporan fotografías reales para reforzar la credibilidad visual del servicio sin saturar la experiencia del sitio."
            align="center"
          />
          <div className="gallery-grid">
            {gallery.slice(0, 8).map((item) => (
              <figure className="gallery-card" key={item.src}>
                <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 25vw" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy cta-section">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow eyebrow--gold"><MapPin size={18} /> Colón · Panamá Pacífico · Tocumen · Panamá</span>
            <h2>Coordine seguridad para su operación logística antes de que exista un riesgo.</h2>
            <p>Solicite vigilancia, custodia o inspección K9 para bodegas, carga, puertos, aeropuertos, transporte y zonas francas.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section section--light">
        <div className="container faq-grid">
          <SectionIntro eyebrow="Preguntas frecuentes" title="Respuestas directas para empresas que buscan seguridad logística." />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
