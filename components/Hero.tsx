import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Building2, Dog, MapPin, ShieldCheck, Truck } from 'lucide-react';
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
          <span className="eyebrow"><ShieldCheck size={18} /> Seguridad logística especializada en Colón</span>
          <h1>Vigilancia e inspección K9 para cargas críticas en Colón.</h1>
          <p>
            Servicios de vigilancia, inspección canina y control preventivo para bodegas, puertos, camiones y empresas logísticas que manejan mercancía de importación y exportación en Colón y Zona Libre.
          </p>
          <div className="hero__buttons">
            <Link className="btn btn--primary" href={whatsappHref('Hola, deseo solicitar una inspección K9 o servicio de vigilancia para carga.')}>
              Solicitar inspección <ArrowRight size={18} />
            </Link>
            <Link className="btn btn--ghost" href="/servicios">
              Ver servicios
            </Link>
          </div>
        </div>
        <div className="hero__panel hero__panel--dark">
          <span className="panel-kicker">Cobertura operativa</span>
          <div className="hero__panel-grid">
            <div><Dog size={24} /><strong>K9</strong><span>Inspección canina de cargas</span></div>
            <div><Truck size={24} /><strong>Carga</strong><span>Aérea, terrestre y marítima</span></div>
            <div><Building2 size={24} /><strong>Bodegas</strong><span>Vigilancia en áreas logísticas</span></div>
            <div><Award size={24} /><strong>BASC</strong><span>Certificación documentada</span></div>
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
          <span className="eyebrow"><MapPin size={18} /> K9 Security International, S.A.</span>
          <h1>Protección especializada para cargas, bodegas y operaciones críticas.</h1>
          <p>
            Vigilancia e inspección canina para empresas que requieren control preventivo en procesos de carga, almacenamiento, importación, exportación y verificación de mercancía.
          </p>
          <div className="hero__buttons">
            <Link className="btn btn--primary" href="/basc">Ver respaldo BASC</Link>
            <Link className="btn btn--secondary" href="/contacto">Coordinar servicio</Link>
          </div>
        </div>
        <div className="hero-alt__collage">
          <Image className="hero-alt__main" src="/images/k9/hero-institucional.webp" alt="Entrega de certificación BASC a K9 Security International" width={740} height={520} priority />
          <Image className="hero-alt__floating hero-alt__floating--one" src="/images/k9/inspeccion-bodega.webp" alt="Inspección K9 en bodega" width={260} height={330} />
          <Image className="hero-alt__floating hero-alt__floating--two" src="/images/k9/basc-certificado.webp" alt="Certificado BASC K9 Security International" width={230} height={300} />
        </div>
      </div>
    </section>
  );
}
