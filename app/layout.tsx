import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SeoSchema } from '@/components/SeoSchema';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'K9 Security International | Seguridad e inspección K9 en Colón',
    template: '%s | K9 Security International'
  },
  description: site.description,
  keywords: [
    'seguridad privada Colón',
    'inspección K9 Panamá',
    'inspección canina de cargas',
    'vigilancia bodegas Zona Libre de Colón',
    'seguridad logística Panamá',
    'inspección contenedores Colón'
  ],
  openGraph: {
    title: 'K9 Security International',
    description: site.description,
    url: site.domain,
    siteName: 'K9 Security International',
    images: [{ url: '/images/k9/og-k9-security.jpg', width: 1200, height: 630 }],
    locale: 'es_PA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K9 Security International',
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
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
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
