import Link from 'next/link';
import { MapPin, ShieldCheck } from 'lucide-react';
import { navItems, services, site, whatsappHref } from '@/lib/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{site.description}</p>
          <div className="footer__location">
            <MapPin size={18} />
            <span>{site.location}</span>
          </div>
        </div>
        <div>
          <h3>Navegación</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Servicios SEO</h3>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/servicios/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__cta">
          <ShieldCheck size={34} />
          <h3>Operaciones que requieren control real</h3>
          <p>Coordine vigilancia, inspección K9 o verificación de mercancía para su operación logística.</p>
          <Link className="btn btn--primary" href={whatsappHref('Hola, deseo cotizar servicios de vigilancia e inspección K9 para una operación logística.')}>
            Solicitar atención
          </Link>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</span>
        <Link href="https://www.lulabtech.com/" target="_blank" rel="noopener noreferrer">
          Desarrollado por LulabTech
        </Link>
      </div>
    </footer>
  );
}
