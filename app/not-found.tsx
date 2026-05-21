import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>La página solicitada no está disponible.</h1>
        <p>Puede volver al inicio o revisar los servicios principales de seguridad e inspección K9.</p>
        <div className="hero__buttons">
          <Link className="btn btn--primary" href="/">Volver al inicio</Link>
          <Link className="btn btn--secondary" href="/servicios">Ver servicios</Link>
        </div>
      </div>
    </section>
  );
}
