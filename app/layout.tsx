import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SeoSchema } from '@/components/SeoSchema';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'K9 Panamá | K9 Security International | Seguridad K9 en Panamá',
    template: '%s | K9 Security International'
  },
  description: site.description,
  keywords: [
    'k9 panama',
    'k9 panamá',
    'k9 security panama',
    'k9 security panamá',
    'seguridad k9 Panamá',
    'seguridad privada Panamá',
    'agencia de seguridad DIASP',
    'inspección K9 Panamá',
    'inspección canina de cargas',
    'vigilancia 24 horas bodegas',
    'custodia de mercancía',
    'seguridad logística Panamá',
    'inspección contenedores Colón',
    'K9 Security International Panamá'
  ],
  openGraph: {
    title: 'K9 Panamá | K9 Security International',
    description: site.description,
    url: site.domain,
    siteName: 'K9 Security International Panamá',
    images: [{ url: '/images/k9/og-k9-security.jpg', width: 1200, height: 630 }],
    locale: 'es_PA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K9 Panamá | K9 Security International',
    description: site.description,
    images: ['/images/k9/og-k9-security.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <SeoSchema />
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
