import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/lib/site';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="service-card">
      <div className="service-card__image">
        <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="service-card__body">
        <span><Icon size={18} /> {service.eyebrow}</span>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <Link href={`/servicios/${service.slug}`}>Ver detalle <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
