import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Building2, Dog, ShieldCheck, Truck } from 'lucide-react';
import { site, trustSignals, whatsappHref } from '@/lib/site';

export function Hero() {
  return site.heroVariant === 'institucional' ? <HeroInstitutional /> : <HeroOperational />;
}

function HeroOperational() {
  return (
    <section className="hero hero--operational">
      <div className="hero__media" aria-hidden="true">
        <Image src="/images/k9/hero-operativo.webp" alt="Unidad K9 inspeccionando camión de carga" fill priority sizes="100vw" />
      </div>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__copy">
          <span className="eyebrow"><ShieldCheck size={18} /> Agencia de seguridad registrada en la DIASP</span>
          <h1>Vigilancia, custodia e inspección K9 para cargas críticas en Colón y Panamá.</h1>
          <p>
            Servicios de seguridad 24 horas, inspección canina y custodia preventiva para bodegas, puertos, aeropuertos, contenedores, furgones, camiones y empresas logísticas que manejan mercancía de importación y exportación a nivel nacional.
          </p>
          <div className="hero__buttons">
            <Link className="btn btn--primary" href={whatsappHref('Hola, deseo solicitar un servicio de vigilancia, custodia o inspección K9 para una operación logística.')}>
              Solicitar servicio <ArrowRight size={18} />
            </Link>
            <Link className="btn btn--ghost" href="/servicios">
              Ver servicios
            </Link>
          </div>
        </div>
        <div className="hero__panel hero__panel--dark">
          <span className="panel-kicker">Cobertura operativa nacional</span>
          <div className="hero__panel-grid">
            <div><Dog size={24} /><strong>K9</strong><span>Inspección canina de cargas</span></div>
            <div><Truck size={24} /><strong>Custodia</strong><span>Contenedores, camiones y furgones</span></div>
            <div><Building2 size={24} /><strong>24/7</strong><span>Vigilancia y seguridad para bodegas</span></div>
            <div><Award size={24} /><strong>BASC</strong><span>Respaldo documental visible</span></div>
          </div>
        </div>
      </div>
      <div className="container trust-strip" aria-label="Indicadores de confianza">
        {trustSignals.map((item) => (
          <div key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroInstitutional() {
  return (
    <section className="hero-alt">
      <div className="container hero-alt__grid">
        <div className="hero-alt__copy">
          <span className="eyebrow"><ShieldCheck size={18} /> Agencia de seguridad registrada en la DIASP</span>
          <h1>Protección especializada para cargas, bodegas y operaciones críticas en Panamá.</h1>
          <p>
            Vigilancia, custodia e inspección canina para empresas que requieren control preventivo en procesos de carga, almacenamiento, importación, exportación y verificación de mercancía a nivel nacional.
          </p>
          <div className="hero__buttons">
            <Link className="btn btn--primary" href="/basc">Ver respaldo BASC</Link>
            <Link className="btn btn--secondary" href="/contacto">Coordinar servicio</Link>
          </div>
        </div>
        <div className="hero-alt__collage">
          <Image className="hero-alt__main" src="/images/k9/hero-institucional.webp" alt="Entrega de certificación BASC a K9 Security International" width={740} height={520} priority />
          <Image className="hero-alt__floating hero-alt__floating--one" src="/images/k9/custodia-operador.webp" alt="Operador K9 con unidad canina" width={260} height={330} />
          <Image className="hero-alt__floating hero-alt__floating--two" src="/images/k9/basc-certificado.webp" alt="Certificado BASC K9 Security International" width={230} height={300} />
        </div>
      </div>
    </section>
  );
}
