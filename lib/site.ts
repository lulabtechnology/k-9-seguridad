import type { LucideIcon } from 'lucide-react';
import {
  Anchor,
  Award,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Container,
  Dog,
  FileCheck2,
  MapPin,
  Plane,
  Radar,
  ShieldCheck,
  Ship,
  Siren,
  Truck,
  Warehouse
} from 'lucide-react';

export const site = {
  name: 'K9 Security International, S.A.',
  shortName: 'K9 Security',
  legalName: 'K9 Security International, S.A.',
  logo: '/brand/k9-logo-original.png',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://k-9-seguridad.vercel.app',
  location: 'France Field, Ave. 4, Zona Libre de Colón, Colón, República de Panamá',
  city: 'Colón, Panamá',
  description:
    'Empresa de seguridad especializada en vigilancia, inspección K9 de cargas y control preventivo para operaciones logísticas en Colón, Zona Libre, puertos, bodegas y rutas de carga.',
  heroVariant: 'operativo' as 'operativo' | 'institucional',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  basc: {
    certificateNumber: 'PANPTY00074-1-1',
    issued: '2024-11-22',
    expires: '2025-11-22',
    standard: 'BASC International Norm and Standards, versión 6-2022',
    pdf: '/docs/certificado-basc-k9-security-international.pdf',
    image: '/images/k9/basc-certificado.webp'
  }
};

export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Empresa', href: '/empresa' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sectores', href: '/sectores' },
  { label: 'BASC', href: '/basc' },
  { label: 'Contacto', href: '/contacto' }
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  image: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: 'inspeccion-k9-cargas-panama',
    title: 'Inspección K9 de cargas',
    eyebrow: 'Prevención y control especializado',
    summary:
      'Revisión con unidades caninas para cargas de importación y exportación en bodegas, camiones, contenedores y áreas operativas.',
    description:
      'Servicio de inspección canina para operaciones logísticas que necesitan verificar cargas antes, durante o después de procesos de traslado, almacenamiento o despacho. El enfoque está orientado a reducir riesgos relacionados con sustancias ilícitas y reforzar los controles de seguridad de la cadena logística.',
    icon: Dog,
    image: '/images/k9/hero-operativo.webp',
    highlights: ['Cargas de importación y exportación', 'Unidades caninas en operación', 'Apoyo preventivo en zonas críticas'],
    seoTitle: 'Inspección K9 de cargas en Panamá y Colón | K9 Security International',
    seoDescription:
      'Inspección K9 de cargas para empresas logísticas, bodegas, camiones, contenedores y operaciones de importación y exportación en Panamá y Colón.'
  },
  {
    slug: 'vigilancia-bodegas-zona-libre-colon',
    title: 'Vigilancia en bodegas',
    eyebrow: 'Zona Libre y centros logísticos',
    summary:
      'Servicio de vigilancia para bodegas, recintos de almacenamiento y áreas de operación dentro de entornos logísticos.',
    description:
      'Cobertura de vigilancia enfocada en bodegas y áreas donde se administra mercancía de alto movimiento. El servicio ayuda a controlar accesos, supervisar áreas sensibles y mantener presencia preventiva en espacios donde se maneja carga comercial.',
    icon: Warehouse,
    image: '/images/k9/vigilancia-bodega.webp',
    highlights: ['Control preventivo', 'Presencia en bodegas', 'Apoyo para operaciones logísticas'],
    seoTitle: 'Vigilancia para bodegas en Zona Libre de Colón | K9 Security',
    seoDescription:
      'Vigilancia especializada para bodegas y empresas logísticas en Zona Libre de Colón, con enfoque preventivo y operativo.'
  },
  {
    slug: 'inspeccion-contenedores-colon',
    title: 'Inspección de contenedores y camiones',
    eyebrow: 'Carga terrestre y marítima',
    summary:
      'Revisión preventiva de contenedores, remolques, camiones y vehículos de carga en puntos operativos.',
    description:
      'Inspección de unidades de transporte y áreas relacionadas con carga terrestre y marítima. El servicio está pensado para operaciones que requieren una verificación adicional antes de ingreso, salida, descarga o movimiento interno de mercancía.',
    icon: Container,
    image: '/images/k9/inspeccion-camion-rojo.webp',
    highlights: ['Camiones y remolques', 'Contenedores', 'Puntos de ingreso y salida'],
    seoTitle: 'Inspección de contenedores y camiones en Colón | K9 Security',
    seoDescription:
      'Inspección de contenedores, camiones y vehículos de carga para operaciones logísticas en Colón y Panamá.'
  },
  {
    slug: 'seguridad-logistica-panama',
    title: 'Seguridad logística integral',
    eyebrow: 'Aérea, terrestre y marítima',
    summary:
      'Apoyo de seguridad para operaciones de carga aérea, terrestre y marítima en empresas de logística, puertos y zonas de almacenamiento.',
    description:
      'Servicio orientado a empresas que necesitan reforzar la seguridad dentro de su cadena logística, incluyendo áreas de carga, bodegas, puertos, rutas terrestres y procesos operativos donde la prevención es crítica.',
    icon: ShieldCheck,
    image: '/images/k9/inspeccion-puerto.webp',
    highlights: ['Carga aérea', 'Carga terrestre', 'Carga marítima'],
    seoTitle: 'Seguridad logística en Panamá | K9 Security International',
    seoDescription:
      'Seguridad logística para empresas de importación, exportación, bodegas, puertos y transporte en Panamá y Colón.'
  },
  {
    slug: 'verificacion-mercancia-danada',
    title: 'Verificación de mercancía dañada',
    eyebrow: 'Control y evidencia operativa',
    summary:
      'Acompañamiento para verificar mercancía dañada, procesos de descarte y eliminación supervisada cuando la operación lo requiere.',
    description:
      'Servicio de verificación para situaciones donde se requiere confirmar el estado de mercancía dañada o dar seguimiento a procesos de eliminación y descarte, manteniendo control operativo y soporte visual cuando aplique.',
    icon: ClipboardCheck,
    image: '/images/k9/inspeccion-caja.webp',
    highlights: ['Mercancía dañada', 'Descarte supervisado', 'Soporte de verificación'],
    seoTitle: 'Verificación de mercancía dañada en Panamá | K9 Security',
    seoDescription:
      'Verificación de mercancía dañada, descarte supervisado y control operativo para empresas logísticas en Panamá.'
  },
  {
    slug: 'servicios-k9-para-puertos-bodegas',
    title: 'Servicios K9 para puertos y bodegas',
    eyebrow: 'Operaciones críticas',
    summary:
      'Despliegue de unidades K9 para inspecciones en puertos, bodegas, patios de carga y áreas de almacenamiento.',
    description:
      'Servicio especializado para empresas que manejan mercancía en ambientes portuarios o de bodega, con inspecciones orientadas a reforzar controles preventivos y apoyar el cumplimiento de protocolos internos de seguridad.',
    icon: Anchor,
    image: '/images/k9/inspeccion-bodega.webp',
    highlights: ['Puertos', 'Patios de carga', 'Bodegas y almacenes'],
    seoTitle: 'Servicios K9 para puertos y bodegas en Panamá | K9 Security',
    seoDescription:
      'Servicios K9 para inspección preventiva en puertos, bodegas, patios de carga y operaciones logísticas en Panamá.'
  }
];

export type Sector = {
  title: string;
  summary: string;
  icon: LucideIcon;
};

export const sectors: Sector[] = [
  {
    title: 'Empresas logísticas',
    summary: 'Operadores que manejan carga de importación, exportación, distribución y almacenamiento.',
    icon: Truck
  },
  {
    title: 'Zona Libre de Colón',
    summary: 'Empresas ubicadas en un entorno de alto movimiento comercial y tránsito de mercancía.',
    icon: Building2
  },
  {
    title: 'Puertos y carga marítima',
    summary: 'Operaciones donde el control preventivo de contenedores y cargas es parte esencial del proceso.',
    icon: Ship
  },
  {
    title: 'Carga aérea',
    summary: 'Apoyo preventivo para mercancía que requiere trazabilidad y revisiones de seguridad.',
    icon: Plane
  },
  {
    title: 'Bodegas y centros de almacenamiento',
    summary: 'Vigilancia e inspección en áreas donde se recibe, organiza o despacha mercancía.',
    icon: Boxes
  },
  {
    title: 'Transporte terrestre',
    summary: 'Inspección de camiones, remolques y rutas operativas vinculadas al traslado de carga.',
    icon: Container
  }
];

export const processSteps = [
  {
    title: 'Evaluación operativa',
    text: 'Se identifica el tipo de carga, punto de revisión, nivel de riesgo y objetivo del servicio.',
    icon: Radar
  },
  {
    title: 'Despliegue especializado',
    text: 'El equipo se ubica en bodega, puerto, patio, camión o zona de carga según la operación.',
    icon: Siren
  },
  {
    title: 'Inspección y vigilancia',
    text: 'Se ejecuta la revisión K9, vigilancia preventiva o verificación requerida por la empresa.',
    icon: Dog
  },
  {
    title: 'Cierre documentado',
    text: 'La operación puede acompañarse con evidencias, observaciones y control de incidencias.',
    icon: FileCheck2
  }
];

export const gallery = [
  { src: '/images/k9/inspeccion-camion-rojo.webp', title: 'Inspección de camión', caption: 'Revisión K9 en unidad de carga terrestre.' },
  { src: '/images/k9/inspeccion-trailer.webp', title: 'Control en trailer', caption: 'Unidad canina dentro de área de carga.' },
  { src: '/images/k9/inspeccion-bodega.webp', title: 'Bodega y mercancía', caption: 'Inspección en almacenes y áreas de inventario.' },
  { src: '/images/k9/inspeccion-puerto.webp', title: 'Carga terrestre', caption: 'Apoyo preventivo en rutas y zonas de tránsito.' },
  { src: '/images/k9/inspeccion-ruedas.webp', title: 'Revisión de unidad', caption: 'Verificación en vehículos de carga.' },
  { src: '/images/k9/inspeccion-mercancia.webp', title: 'Mercancía paletizada', caption: 'Inspección de cajas y carga en bodega.' },
  { src: '/images/k9/control-neumaticos.webp', title: 'Control físico', caption: 'Revisión complementaria en transporte pesado.' },
  { src: '/images/k9/basc-entrega.webp', title: 'Respaldo institucional', caption: 'Entrega de certificación y compromiso con estándares de seguridad.' }
];

export const faqs = [
  {
    question: '¿Atienden empresas dentro de la Zona Libre de Colón?',
    answer:
      'Sí. La operación está enfocada en Colón y en empresas que manejan carga, bodegas, mercancía de importación/exportación y procesos logísticos.'
  },
  {
    question: '¿El servicio K9 aplica solo para camiones?',
    answer:
      'No. Puede aplicarse a camiones, contenedores, bodegas, mercancía paletizada, áreas de carga y puntos operativos donde se necesite una revisión preventiva.'
  },
  {
    question: '¿También trabajan con puertos y carga marítima?',
    answer:
      'Sí. La propuesta de servicio contempla apoyo para operaciones aéreas, terrestres y marítimas, incluyendo puertos, bodegas y transporte de carga.'
  },
  {
    question: '¿Pueden verificar mercancía dañada o procesos de eliminación?',
    answer:
      'Sí. La empresa puede apoyar en la verificación de mercancía dañada y en procesos donde se requiere constatar descarte o eliminación supervisada.'
  },
  {
    question: '¿Qué significa el respaldo BASC en esta web?',
    answer:
      'El respaldo BASC se muestra con los datos del documento recibido, incluyendo fecha de expedición, vencimiento y número de certificación, para mantener una comunicación clara y verificable.'
  }
];

export const trustSignals = [
  { label: 'Colón', value: 'Presencia operativa' },
  { label: 'Zona Libre', value: 'Entorno logístico' },
  { label: 'K9', value: 'Inspección canina' },
  { label: 'BASC', value: 'Estándares de seguridad' }
];

export const certifications = [
  {
    title: 'Norma BASC',
    text: 'Documento BASC International Norm and Standards, versión 6-2022, asociado a servicios de custodia, vigilancia privada e inspección canina.',
    icon: Award
  },
  {
    title: 'Seguridad de la cadena logística',
    text: 'Enfoque alineado a controles para servicios de seguridad, vigilancia privada e inspección canina.',
    icon: ShieldCheck
  },
  {
    title: 'Cobertura operativa',
    text: 'Cobertura para cargas, bodegas, puertos, camiones y procesos donde se requiere control preventivo y evidencia operativa.',
    icon: CheckCircle2
  }
];

export function whatsappHref(message: string) {
  const phone = site.whatsapp.replace(/[^0-9]/g, '');
  if (!phone) return '/contacto';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
