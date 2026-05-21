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
        <Image src={site.logo} alt={site.name} width={56} height={56} priority />
      </Link>
    );
  }

  return (
    <Link href="/" className={`site-logo ${light ? 'site-logo--light' : ''}`} aria-label={site.name}>
      <span className="site-logo__seal">
        <Image src={site.logo} alt={site.name} width={74} height={74} priority />
      </span>
      <span className="site-logo__wordmark">
        <strong>K9 Security</strong>
        <small>International, S.A.</small>
      </span>
    </Link>
  );
}
