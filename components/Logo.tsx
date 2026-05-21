import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

type LogoProps = {
  variant?: 'full' | 'mark';
  light?: boolean;
};

export function Logo({ variant = 'full', light = false }: LogoProps) {
  if (variant === 'mark') {
    return (
      <Link href="/" className="logo-mark" aria-label={site.name}>
        <span>K9</span>
      </Link>
    );
  }

  return (
    <Link href="/" className={`site-logo ${light ? 'site-logo--light' : ''}`} aria-label={site.name}>
      <Image src={site.logo} alt={site.name} width={240} height={70} priority />
    </Link>
  );
}
