import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { whatsappHref } from '@/lib/site';

export function WhatsAppFloat() {
  return (
    <Link className="whatsapp-float" href={whatsappHref('Hola, necesito información sobre seguridad e inspección K9 para cargas.')} aria-label="Contactar por WhatsApp">
      <MessageCircle size={25} />
      <span>Solicitar servicio</span>
    </Link>
  );
}
