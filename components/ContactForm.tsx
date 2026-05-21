'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || 'No se pudo enviar la solicitud.');
      setStatus('sent');
      setMessage(data.message || 'Solicitud recibida correctamente.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'No se pudo enviar la solicitud.');
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Nombre de contacto
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Empresa
          <input name="company" type="text" required autoComplete="organization" />
        </label>
        <label>
          Teléfono o WhatsApp
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
        <label>
          Correo
          <input name="email" type="email" autoComplete="email" />
        </label>
      </div>
      <label>
        Servicio requerido
        <select name="service" defaultValue="Inspección K9 de cargas">
          <option>Inspección K9 de cargas</option>
          <option>Vigilancia en bodegas</option>
          <option>Inspección de contenedores y camiones</option>
          <option>Seguridad logística integral</option>
          <option>Verificación de mercancía dañada</option>
          <option>Servicios K9 para puertos y bodegas</option>
        </select>
      </label>
      <label>
        Descripción de la operación
        <textarea name="details" rows={5} required />
      </label>
      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Enviar solicitud'} <Send size={17} />
      </button>
      {message ? <p className={`form-status form-status--${status}`}>{message}</p> : null}
    </form>
  );
}
