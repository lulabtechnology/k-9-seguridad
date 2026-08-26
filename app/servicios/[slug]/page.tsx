import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { getService, services } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: {
      canonical: `/servicios/${service.slug}`
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/servicios/${service.slug}`,
      images: [{ url: service.image }]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <section className="service-detail-hero">
        <div className="container service-detail-hero__grid">
          <div>
            <Link className="back-link" href="/servicios"><ArrowLeft size={16} /> Volver a servicios</Link>
            <span className="eyebrow"><Icon size={18} /> {service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="detail-highlights">
              {service.highlights.map((item) => (
                <span key={item}><CheckCircle2 size={18} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="service-detail-hero__image">
            <Image src={service.image} alt={service.title} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container detail-content">
          <div>
            <span className="eyebrow">Aplicación del servicio</span>
            <h2>Diseñado para operaciones donde la prevención debe ser visible y documentable.</h2>
            <p>
              Este servicio puede integrarse en procesos de recepción, almacenamiento, inspección, despacho o traslado de mercancía. La coordinación se adapta al punto de revisión, tipo de carga, horario operativo y nivel de control que la empresa requiere.
            </p>
            <ul className="check-list">
              <li><ShieldCheck size={18} /> Refuerza controles internos de seguridad.</li>
              <li><ShieldCheck size={18} /> Apoya operaciones logísticas con movimiento de carga.</li>
              <li><ShieldCheck size={18} /> Aporta evidencia operativa para clientes, aliados y responsables de seguridad.</li>
              <li><ShieldCheck size={18} /> Puede coordinarse en Colón y a nivel nacional, incluyendo zonas francas, puertos, aeropuertos y parques industriales.</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
