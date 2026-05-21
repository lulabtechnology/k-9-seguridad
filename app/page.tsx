import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, MapPin, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { SectionIntro } from '@/components/SectionIntro';
import { ServiceCard } from '@/components/ServiceCard';
import { certifications, faqs, gallery, processSteps, sectors, services, site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section section--light">
        <div className="container split-grid split-grid--center">
          <SectionIntro
            eyebrow="Empresa de seguridad logística"
            title="Especialistas en vigilancia e inspección de cargas para operaciones de alto movimiento."
            text="K9 Security International, S.A. atiende empresas que manejan mercancía en Colón, Zona Libre, bodegas, puertos y rutas de carga, con servicios enfocados en prevención, control operativo y verificación profesional."
          />
          <div className="feature-panel">
            <span className="feature-panel__label">Diferencial declarado</span>
            <h3>Vigilancia e inspección de cargas aéreas, terrestres y marítimas.</h3>
            <p>La operación se presenta como una solución integral para empresas logísticas que necesitan reforzar seguridad en diferentes puntos de su cadena de carga.</p>
            <Link href="/empresa" className="text-link">Conocer la empresa <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Servicios principales"
            title="Control preventivo para bodegas, puertos, camiones y mercancía."
            text="Cada servicio fue estructurado para responder a búsquedas reales de empresas logísticas en Panamá y Colón, sin depender de textos genéricos."
            align="center"
          />
          <div className="cards-grid cards-grid--services">
            {services.slice(0, 6).map((service) => (
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
            <p>La web comunica una metodología simple, profesional y fácil de entender para empresas que necesitan seguridad sin improvisaciones.</p>
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
            title="Una web pensada para atraer empresas de logística, bodegas y comercio internacional."
            text="El contenido se enfoca en sectores que realmente pueden necesitar vigilancia, inspección K9 y control de mercancía."
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

      <section className="section basc-band">
        <div className="container basc-band__grid">
          <div className="basc-band__image">
            <Image src={site.basc.image} alt="Certificado BASC de K9 Security International" width={660} height={820} />
          </div>
          <div>
            <span className="eyebrow"><Award size={18} /> Respaldo BASC</span>
            <h2>Control documentado bajo estándares internacionales de seguridad.</h2>
            <p>
              El certificado compartido por la empresa hace referencia a la Norma y Estándares Internacionales BASC, versión 6-2022, para servicios de custodia de seguridad, vigilancia privada e inspección canina en Colón y Panamá.
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
            <p className="note"><strong>Nota:</strong> para afirmar vigencia pública en producción, se debe cargar el certificado renovado correspondiente.</p>
            <Link className="btn btn--secondary" href="/basc">Ver sección BASC</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Galería operativa"
            title="Imágenes reales de inspección, vigilancia y control de carga."
            text="Las fotos se usan de forma estratégica para mostrar capacidad operativa sin saturar la experiencia del sitio."
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
            <span className="eyebrow eyebrow--gold"><MapPin size={18} /> Colón · Zona Libre · Panamá</span>
            <h2>Coordine seguridad para su operación logística antes de que exista un riesgo.</h2>
            <p>Solicite vigilancia, inspección K9 o verificación de mercancía para bodegas, carga, puertos y transporte.</p>
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
