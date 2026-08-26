import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { SectionIntro } from '@/components/SectionIntro';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto para servicios de seguridad K9',
  description:
    'Solicite servicios de vigilancia, inspección K9 de cargas, control de contenedores y seguridad logística para empresas en Colón y Panamá.',
  alternates: {
    canonical: '/contacto'
  },
  openGraph: {
    url: '/contacto'
  }
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero page-hero--contacto">
        <div className="page-hero__media">
          <Image src="/images/k9/inspeccion-camion-rojo.webp" alt="Inspección K9 de camión de carga" fill priority sizes="100vw" />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="eyebrow">Contacto</span>
          <h1>Solicite vigilancia, inspección K9 o verificación de mercancía.</h1>
          <p>Comparta la ubicación, tipo de carga, horario requerido y nivel de urgencia para coordinar una atención adecuada.</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container contact-page-grid">
          <div>
            <SectionIntro
              eyebrow="Solicitud comercial"
              title="Atención para empresas logísticas, bodegas, puertos y carga terrestre."
              text="Indique el tipo de carga, ubicación, horario, urgencia y servicio requerido para orientar correctamente la solicitud."
            />
            <div className="contact-cards">
              <article>
                <MapPin size={24} />
                <h3>Ubicación</h3>
                <p>{site.location}</p>
              </article>
              {site.whatsapp ? (
                <article>
                  <MessageCircle size={24} />
                  <h3>WhatsApp</h3>
                  <p>{site.whatsapp}</p>
                </article>
              ) : null}
              {site.email ? (
                <article>
                  <Mail size={24} />
                  <h3>Correo</h3>
                  <p>{site.email}</p>
                </article>
              ) : null}
              <article>
                <Phone size={24} />
                <h3>Tipo de atención</h3>
                <p>Servicios para empresas con operaciones de carga, bodega y logística.</p>
              </article>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
