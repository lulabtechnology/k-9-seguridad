import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import { SectionIntro } from '@/components/SectionIntro';
import { processSteps, site, whatsappHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Empresa de seguridad logística en Colón',
  description:
    'Conozca K9 Security International, S.A., empresa de vigilancia e inspección K9 para cargas, bodegas, puertos y operaciones logísticas en Colón.'
};

export default function EmpresaPage() {
  return (
    <>
      <section className="page-hero page-hero--empresa">
        <div className="page-hero__media">
          <Image src="/images/k9/hero-institucional.webp" alt="Entrega de certificación a K9 Security International" fill priority sizes="100vw" />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="eyebrow"><ShieldCheck size={18} /> Empresa</span>
          <h1>Seguridad especializada para comercio, logística y operaciones de carga.</h1>
          <p>K9 Security International, S.A. presta servicios de vigilancia, inspección K9 y verificación operativa para empresas que manejan mercancía en Colón, Zona Libre, puertos y bodegas.</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container split-grid split-grid--center">
          <SectionIntro
            eyebrow="Presencia estratégica"
            title="Colón es el punto natural para atender carga de importación y exportación."
            text="La empresa se ubica en un entorno comercial donde la seguridad logística, el control de mercancía y la prevención son parte esencial de la operación diaria."
          />
          <div className="info-card info-card--strong">
            <MapPin size={34} />
            <h3>Ubicación de referencia</h3>
            <p>{site.location}</p>
            <Link href="/contacto" className="text-link">Coordinar atención comercial</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container values-grid">
          <article>
            <CheckCircle2 size={32} />
            <h2>Enfoque preventivo</h2>
            <p>La operación se comunica como una capa de control antes de que una carga, bodega o vehículo represente un riesgo para la empresa.</p>
          </article>
          <article>
            <Award size={32} />
            <h2>Respaldo documental</h2>
            <p>La empresa cuenta con respaldo documental BASC asociado a procesos de seguridad, vigilancia privada e inspección canina, con datos de expedición y vencimiento visibles para consulta.</p>
          </article>
          <article>
            <ShieldCheck size={32} />
            <h2>Especialización logística</h2>
            <p>El contenido está dirigido a empresas que manejan carga, bodegas, puertos, importación, exportación y transporte terrestre.</p>
          </article>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container process-grid">
          <div>
            <span className="eyebrow eyebrow--gold">Cómo trabajamos</span>
            <h2>Una operación ordenada para intervenir sin detener la actividad logística del cliente.</h2>
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

      <section className="section">
        <div className="container final-cta">
          <h2>Refuerce su operación logística con seguridad especializada.</h2>
          <p>La empresa puede apoyar operaciones donde la prevención, el control de accesos, la inspección de carga y la evidencia operativa son factores críticos.</p>
          <Link className="btn btn--primary" href={whatsappHref('Hola, deseo información sobre K9 Security International y sus servicios para empresas logísticas.')}>
            Solicitar información
          </Link>
        </div>
      </section>
    </>
  );
}
