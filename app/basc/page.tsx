import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle, Award, Download, FileCheck2 } from 'lucide-react';
import { SectionIntro } from '@/components/SectionIntro';
import { certifications, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Certificación BASC y respaldo documental',
  description:
    'Sección de respaldo BASC de K9 Security International, con certificado compartido, datos documentales y nota de vigencia para producción.'
};

export default function BascPage() {
  return (
    <>
      <section className="page-hero page-hero--basc">
        <div className="page-hero__media">
          <Image src="/images/k9/basc-entrega.webp" alt="Entrega de certificación BASC" fill priority sizes="100vw" />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="eyebrow"><Award size={18} /> BASC</span>
          <h1>Respaldo documental para operaciones de seguridad logística.</h1>
          <p>Sección preparada para presentar de forma profesional la certificación y la relación de la empresa con estándares internacionales de seguridad.</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container basc-detail-grid">
          <div className="basc-document">
            <Image src={site.basc.image} alt="Certificado BASC K9 Security International" width={720} height={920} priority />
          </div>
          <div>
            <SectionIntro
              eyebrow="Documento compartido"
              title="Certificación BASC asociada a K9 Security International, S.A."
              text="El documento se integra como respaldo visual y descargable. La redacción evita afirmar vigencia hasta cargar el certificado renovado correspondiente."
            />
            <div className="doc-facts">
              <div><strong>Certificación No.</strong><span>{site.basc.certificateNumber}</span></div>
              <div><strong>Expedición</strong><span>{site.basc.issued}</span></div>
              <div><strong>Vencimiento del documento recibido</strong><span>{site.basc.expires}</span></div>
              <div><strong>Norma</strong><span>{site.basc.standard}</span></div>
            </div>
            <div className="warning-box">
              <AlertTriangle size={22} />
              <p>Antes de publicar la frase “certificación vigente”, el cliente debe entregar el certificado actualizado. Esta versión conserva el respaldo sin comprometer legalmente el contenido.</p>
            </div>
            <Link href={site.basc.pdf} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              Descargar certificado <Download size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Compromiso con estándares"
            title="La sección BASC suma confianza sin exagerar el alcance del documento."
            text="El contenido está redactado para reforzar credibilidad en clientes logísticos, importadores, exportadores y empresas con procesos de control."
            align="center"
          />
          <div className="cert-grid cert-grid--large">
            {certifications.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={28} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
            <article>
              <FileCheck2 size={28} />
              <h3>Descargable</h3>
              <p>El PDF queda disponible dentro del sitio para facilitar validación comercial cuando la empresa decida mostrarlo públicamente.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
