'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

export function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('k9-preloader');
    if (!alreadyShown) {
      setShow(true);
      const timer = window.setTimeout(() => {
        sessionStorage.setItem('k9-preloader', '1');
        setShow(false);
      }, 1150);
      return () => window.clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="preloader" role="status" aria-label="Cargando sitio">
      <div className="preloader__ring" />
      <Image src={site.logo} alt={site.name} width={270} height={78} priority />
      <p>Seguridad logística en operación</p>
    </div>
  );
}
