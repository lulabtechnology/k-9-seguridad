'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const CONTACT_WHATSAPP_NUMBER = '50766177034';

function getField(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = getField(form, 'name');
    const company = getField(form, 'company');
    const phone = getField(form, 'phone');
    const email = getField(form, 'email') || 'No indicado';
    const service = getField(form, 'service') || 'No indicado';
    const details = getField(form, 'details');

    if (!name || !company || !phone || !details) {
      setStatus('error');
      setMessage('Complete nombre, empresa, teléfono y descripción de la operación.');
      return;
    }

    const whatsappText = encodeURIComponent(
      `Hola, deseo solicitar un servicio de K9 Security.\n\nNombre: ${name}\nEmpresa: ${company}\nTeléfono: ${phone}\nCorreo: ${email}\nServicio: ${service}\n\nDetalle:\n${details}`
    );

    window.location.href = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${whatsappText}`;
    setStatus('sent');
    setMessage('Se abrirá WhatsApp para enviar la solicitud al equipo de atención.');
    formElement.reset();
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
          <option>Vigilancia y seguridad 24 horas</option>
          <option>Inspección de contenedores, furgones y camiones</option>
          <option>Seguridad logística integral</option>
          <option>Verificación de mercancía dañada</option>
          <option>Inspección de bodegas, puertos y parques industriales</option>
          <option>Custodia de mercancía y transportes</option>
          <option>Custodia de bodega a bodega</option>
        </select>
      </label>
      <label>
        Descripción de la operación
        <textarea name="details" rows={5} required />
      </label>
      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'} <Send size={17} />
      </button>
      {message ? <p className={`form-status form-status--${status}`}>{message}</p> : null}
    </form>
  );
}
