'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, whatsappHref } from '@/lib/site';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <nav className="header__nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header__actions">
          <Link className="btn btn--small btn--primary" href={whatsappHref('Hola, deseo solicitar información sobre servicios de seguridad e inspección K9 para carga.')}>
            Cotizar servicio
          </Link>
          <button className="menu-toggle" type="button" aria-label="Abrir menú" onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} aria-hidden={!open}>
        <button className="mobile-menu__close" type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
          <X size={26} />
        </button>
        <Logo />
        <nav>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn--primary" href={whatsappHref('Hola, deseo coordinar una inspección o servicio de vigilancia K9.')} onClick={() => setOpen(false)}>
          Solicitar inspección
        </Link>
      </div>
      <button className={`mobile-menu__backdrop ${open ? 'mobile-menu__backdrop--open' : ''}`} type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)} />
    </header>
  );
}
