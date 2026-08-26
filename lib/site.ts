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
  shortName: 'K9 Security International',
  legalName: 'K9 Security International, S.A.',
  logo: '/brand/k9-logo-original.png',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://k9panamasecurity.com',
  location: 'France Field, Ave. 4, Zona Libre de Colón, Colón, República de Panamá',
  city: 'Colón, Panamá',
  description:
    'Empresa de seguridad K9 en Panamá registrada en la DIASP, especializada en vigilancia 24 horas, custodia de mercancía e inspección K9 de cargas para bodegas, puertos, aeropuertos, contenedores, furgones y camiones en Colón y a nivel nacional.',
  heroVariant: 'operativo' as 'operativo' | 'institucional',
  whatsapp: '+507 6617-7034',
  aliases: [
    'K9 Security International',
    'K9 Security International Panamá',
    'K9 Security International Panama'
  ],
  identityDescription:
    'K9 Security International, S.A. es una empresa independiente con identidad corporativa propia y base operativa en Colón, Panamá. No es una sucursal, filial ni división de otras empresas con nombres similares.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  basc: {
    certificateNumber: 'PANPTY00074-1-2',
    issued: '2025-11-22',
    standard: 'BASC International Norm and Standards, versión 6-2022',
    pdf: '/docs/certificado-basc-k9-security-international.pdf',
    image: '/images/k9/basc-certificado.webp'
  }
};

export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'K9 Panamá', href: '/k9-panama' },
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
      'Revisión con unidades caninas para cargas de importación y exportación en bodegas, contenedores, camiones, furgones y áreas operativas.',
    description:
      'Servicio de inspección canina para operaciones logísticas que necesitan verificar cargas antes, durante o después de procesos de almacenamiento, movilización o despacho. La operación está orientada a fortalecer controles contra contaminación de mercancía con sustancias ilícitas y a reforzar la seguridad de la cadena logística.',
    icon: Dog,
    image: '/images/k9/hero-operativo.webp',
    highlights: ['Bodegas, contenedores y camiones', 'Carga aérea, terrestre y marítima', 'Apoyo preventivo con unidades K9'],
    seoTitle: 'Inspección K9 de cargas en Panamá | K9 Security International',
    seoDescription:
      'Inspección K9 de cargas para empresas logísticas, bodegas, camiones, contenedores, furgones y operaciones de importación y exportación en Panamá y Colón.'
  },
  {
    slug: 'vigilancia-bodegas-zona-libre-colon',
    title: 'Vigilancia y seguridad 24 horas',
    eyebrow: 'Bodegas, patios y puntos de control',
    summary:
      'Servicio de seguridad 24 horas para bodegas, patios, contenedores, furgones, camiones y áreas de operación logística.',
    description:
      'Cobertura de vigilancia para empresas que necesitan presencia preventiva, control de accesos y supervisión operativa continua. El servicio puede aplicarse en bodegas, patios de carga, recintos industriales, contenedores, furgones y camiones vinculados al movimiento de mercancía.',
    icon: Warehouse,
    image: '/images/k9/inspeccion-bodega-negra.webp',
    highlights: ['Servicio de seguridad 24 horas', 'Bodegas, contenedores, furgones y camiones', 'Control de accesos y supervisión operativa'],
    seoTitle: 'Vigilancia y seguridad 24 horas para bodegas en Panamá | K9 Security International',
    seoDescription:
      'Vigilancia y seguridad 24 horas para bodegas, patios, contenedores, furgones y camiones en Colón y a nivel nacional.'
  },
  {
    slug: 'inspeccion-contenedores-colon',
    title: 'Inspección de contenedores, furgones y camiones',
    eyebrow: 'Carga terrestre y marítima',
    summary:
      'Revisión preventiva de contenedores, furgones, remolques, camiones y vehículos de carga en puntos operativos.',
    description:
      'Servicio pensado para operaciones que requieren una verificación adicional en unidades de transporte antes de ingreso, salida, descarga o movimiento interno de mercancía. Permite reforzar la seguridad de la carga y mantener controles visibles sobre los equipos de transporte.',
    icon: Container,
    image: '/images/k9/inspeccion-camion-rojo.webp',
    highlights: ['Contenedores y remolques', 'Furgones y camiones', 'Puntos de ingreso, salida y tránsito'],
    seoTitle: 'Inspección de contenedores, furgones y camiones en Panamá | K9 Security International',
    seoDescription:
      'Inspección de contenedores, furgones, camiones y vehículos de carga para operaciones logísticas en Colón y Panamá.'
  },
  {
    slug: 'seguridad-logistica-panama',
    title: 'Seguridad logística integral',
    eyebrow: 'Aérea, terrestre y marítima',
    summary:
      'Apoyo de seguridad para operaciones de carga aérea, terrestre y marítima en empresas de logística, puertos, aeropuertos y zonas de almacenamiento.',
    description:
      'Servicio orientado a empresas que necesitan reforzar la seguridad dentro de su cadena logística, incluyendo áreas de carga, bodegas, puertos, aeropuertos, rutas terrestres y procesos donde la prevención es crítica.',
    icon: ShieldCheck,
    image: '/images/k9/inspeccion-puerto.webp',
    highlights: ['Carga aérea', 'Carga terrestre', 'Carga marítima y zonas francas'],
    seoTitle: 'Seguridad logística en Panamá | K9 Security International',
    seoDescription:
      'Seguridad logística para empresas de importación, exportación, bodegas, puertos, aeropuertos y transporte en Panamá.'
  },
  {
    slug: 'verificacion-mercancia-danada',
    title: 'Verificación de mercancía dañada',
    eyebrow: 'Control y evidencia operativa',
    summary:
      'Acompañamiento para verificar mercancía dañada, procesos de descarte y eliminación supervisada cuando la operación lo requiere.',
    description:
      'Servicio de verificación para situaciones donde se requiere confirmar el estado de mercancía dañada o dar seguimiento a procesos de eliminación, destrucción o descarte, manteniendo control operativo y soporte visual cuando aplique.',
    icon: ClipboardCheck,
    image: '/images/k9/inspeccion-caja.webp',
    highlights: ['Mercancía dañada', 'Descarte y eliminación supervisada', 'Soporte de verificación'],
    seoTitle: 'Verificación de mercancía dañada en Panamá | K9 Security International',
    seoDescription:
      'Verificación de mercancía dañada, descarte supervisado y control operativo para empresas logísticas en Panamá.'
  },
  {
    slug: 'servicios-k9-para-puertos-bodegas',
    title: 'Inspección de bodegas, puertos y parques industriales',
    eyebrow: 'Operaciones críticas',
    summary:
      'Despliegue de unidades K9 para inspecciones en bodegas, puertos, patios de carga, parques industriales y áreas de almacenamiento.',
    description:
      'Servicio especializado para empresas que manejan mercancía en ambientes portuarios, parques industriales o de bodega, con inspecciones orientadas a reforzar controles preventivos y apoyar el cumplimiento de protocolos internos de seguridad.',
    icon: Anchor,
    image: '/images/k9/inspeccion-pallets.webp',
    highlights: ['Bodegas y almacenes', 'Puertos y patios de carga', 'Parques industriales'],
    seoTitle: 'Inspección K9 en puertos, bodegas y parques industriales | K9 Security International',
    seoDescription:
      'Servicios K9 para inspección preventiva en puertos, bodegas, patios de carga y parques industriales en Panamá.'
  },
  {
    slug: 'custodia-mercancia-y-transportes',
    title: 'Custodia de mercancía y transportes',
    eyebrow: 'Mercancía en movimiento',
    summary:
      'Custodia de contenedores, camiones y furgones hacia puertos, aeropuertos y otros puntos de entrega para distintos tipos de mercancía.',
    description:
      'Servicio de custodia para mercancía y transportes durante traslados operativos, incluyendo contenedores, camiones y furgones que deben movilizarse hacia aeropuertos, puertos, bodegas u otros destinos. Está diseñado para reforzar control, acompañamiento y seguridad durante la ruta.',
    icon: Truck,
    image: '/images/k9/custodia-operador.webp',
    highlights: ['Custodia de contenedores, camiones y furgones', 'Traslados hacia puertos y aeropuertos', 'Acompañamiento para distintos tipos de mercancía'],
    seoTitle: 'Custodia de mercancía y transportes en Panamá | K9 Security International',
    seoDescription:
      'Custodia de mercancía y transportes para contenedores, camiones y furgones hacia puertos, aeropuertos y bodegas en Panamá.'
  },
  {
    slug: 'custodia-bodega-a-bodega',
    title: 'Custodia de bodega a bodega',
    eyebrow: 'Traslado con control',
    summary:
      'Servicio de custodia y acompañamiento para mercancía que se moviliza de una bodega a otra dentro de la operación del cliente.',
    description:
      'Solución orientada a empresas que requieren trasladar mercancía entre bodegas o centros operativos con acompañamiento de seguridad y control preventivo. Facilita un movimiento más ordenado y respaldado en trayectos internos o entre puntos logísticos.',
    icon: Boxes,
    image: '/images/k9/custodia-mercancia.webp',
    highlights: ['Movimiento entre bodegas', 'Control preventivo en traslado', 'Acompañamiento operativo'],
    seoTitle: 'Custodia de bodega a bodega en Panamá | K9 Security International',
    seoDescription:
      'Custodia de bodega a bodega para movimientos de mercancía entre centros logísticos, almacenes y puntos operativos en Panamá.'
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
    title: 'Importadores y exportadores',
    summary: 'Empresas que requieren control preventivo y seguridad sobre mercancía en movimiento o almacenada.',
    icon: Building2
  },
  {
    title: 'Bodegas y centros de almacenamiento',
    summary: 'Vigilancia, inspección y custodia en áreas donde se recibe, organiza o despacha mercancía.',
    icon: Warehouse
  },
  {
    title: 'Puertos y carga marítima',
    summary: 'Operaciones donde el control preventivo de contenedores y cargas es parte esencial del proceso.',
    icon: Ship
  },
  {
    title: 'Carga aérea y aeropuerto de cargas',
    summary: 'Apoyo para mercancía que requiere trazabilidad y revisiones de seguridad en terminales o áreas aeroportuarias.',
    icon: Plane
  },
  {
    title: 'Parques industriales y zonas francas',
    summary: 'Atención en complejos industriales y comerciales donde la seguridad logística es un factor crítico.',
    icon: Container
  }
];

export type CoverageZone = {
  title: string;
  summary: string;
  icon: LucideIcon;
};

export const coverageZones: CoverageZone[] = [
  {
    title: 'Zona Libre de Colón',
    summary: 'Cobertura en uno de los principales centros de movimiento comercial y de mercancía del país.',
    icon: Building2
  },
  {
    title: 'Agencia Panamá Pacífico',
    summary: 'Apoyo para empresas instaladas en esta zona estratégica para operaciones logísticas y corporativas.',
    icon: CheckCircle2
  },
  {
    title: 'Aeropuerto de Cargas en Tocumen',
    summary: 'Custodia, inspección y seguridad para operaciones vinculadas a carga aérea y movimientos aeroportuarios.',
    icon: Plane
  },
  {
    title: 'Puertos y terminales',
    summary: 'Servicios para contenedores, camiones, patios y operaciones asociadas a carga marítima.',
    icon: Ship
  },
  {
    title: 'Parques industriales',
    summary: 'Atención para parques logísticos, centros industriales y complejos donde se almacena o moviliza mercancía.',
    icon: Warehouse
  },
  {
    title: 'Cobertura nacional',
    summary: 'Los servicios pueden coordinarse a nivel nacional en los principales puntos de operación del cliente.',
    icon: MapPin
  }
];

export const processSteps = [
  {
    title: 'Evaluación operativa',
    text: 'Se identifica el tipo de carga, el punto de revisión, la ruta o instalación y el objetivo del servicio.',
    icon: Radar
  },
  {
    title: 'Despliegue especializado',
    text: 'El equipo se ubica en bodega, puerto, patio, contenedor, camión, furgón o zona de carga según la operación.',
    icon: Siren
  },
  {
    title: 'Inspección, vigilancia o custodia',
    text: 'Se ejecuta la revisión K9, la vigilancia preventiva o la custodia de mercancía y transportes requerida por el cliente.',
    icon: Dog
  },
  {
    title: 'Cierre documentado',
    text: 'La operación puede acompañarse con evidencias, observaciones y control de incidencias según el servicio contratado.',
    icon: FileCheck2
  }
];

export const gallery = [
  { src: '/images/k9/custodia-operador.webp', title: 'Custodia operativa', caption: 'Operador y unidad canina en punto de carga.' },
  { src: '/images/k9/ruta-transportes.webp', title: 'Transporte en ruta', caption: 'Custodia y seguimiento para camiones y mercancía en tránsito.' },
  { src: '/images/k9/custodia-mercancia.webp', title: 'Mercancía bajo control', caption: 'Custodia de mercancía y transportes en área operativa.' },
  { src: '/images/k9/inspeccion-bodega-negra.webp', title: 'Inspección en bodega', caption: 'Unidad K9 en proceso de revisión dentro de almacenes.' },
  { src: '/images/k9/inspeccion-pallets.webp', title: 'Verificación en pallets', caption: 'Inspección de mercancía almacenada en bodega.' },
  { src: '/images/k9/inspeccion-contenedor-cafe.webp', title: 'Control en contenedor', caption: 'Revisión preventiva dentro de contenedores con mercancía.' },
  { src: '/images/k9/inspeccion-camion-rojo.webp', title: 'Revisión de unidad', caption: 'Verificación preventiva en camiones y áreas de acceso.' },
  { src: '/images/k9/basc-entrega.webp', title: 'Respaldo institucional', caption: 'Compromiso con procesos de seguridad y respaldo documental.' }
];

export const faqs = [
  {
    question: '¿Atienden únicamente dentro de la Zona Libre de Colón?',
    answer:
      'No. K9 Security International atiende operaciones en Colón y a nivel nacional, incluyendo las principales zonas francas, puertos, parques industriales, Panamá Pacífico y el aeropuerto de cargas en Tocumen.'
  },
  {
    question: '¿Qué tipo de instalaciones y unidades pueden inspeccionar?',
    answer:
      'La operación puede aplicarse en bodegas, contenedores, camiones, furgones, patios, mercancía paletizada y otras áreas donde se requiera inspección o control preventivo.'
  },
  {
    question: '¿Pueden custodiar mercancía y transportes?',
    answer:
      'Sí. Se ofrecen servicios de custodia para mercancía, contenedores, camiones y furgones, incluyendo acompañamiento hacia puertos, aeropuertos y trayectos de bodega a bodega.'
  },
  {
    question: '¿También trabajan con puertos, zonas francas y parques industriales?',
    answer:
      'Sí. La propuesta contempla atención para puertos, zonas francas, parques industriales, bodegas y operaciones de carga aérea, terrestre y marítima.'
  },
  {
    question: '¿Qué respaldo institucional se muestra en la web?',
    answer:
      'K9 Security International, S.A. se identifica como una agencia de seguridad registrada en la DIASP y muestra su certificado BASC con número de certificación, fecha de expedición y norma aplicable.'
  }
];

export const trustSignals = [
  { label: 'DIASP', value: 'Agencia registrada' },
  { label: 'Panamá', value: 'Cobertura nacional' },
  { label: 'K9', value: 'Inspección canina' },
  { label: 'BASC', value: 'Respaldo documental' }
];

export const certifications = [
  {
    title: 'Norma BASC',
    text: 'Documento BASC International Norm and Standards, versión 6-2022, asociado a servicios de custodia, vigilancia privada e inspección canina.',
    icon: Award
  },
  {
    title: 'Seguridad de la cadena logística',
    text: 'Enfoque alineado a controles para servicios de seguridad, vigilancia privada e inspección canina dentro de operaciones logísticas.',
    icon: ShieldCheck
  },
  {
    title: 'Cobertura operativa',
    text: 'Cobertura para cargas, bodegas, puertos, camiones, furgones y procesos donde se requiere control preventivo y evidencia operativa.',
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
