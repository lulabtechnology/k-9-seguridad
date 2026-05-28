import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  service?: string;
  details?: string;
};

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 1200) : '';
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as ContactPayload;
  const payload = {
    name: clean(body.name),
    company: clean(body.company),
    phone: clean(body.phone),
    email: clean(body.email),
    service: clean(body.service),
    details: clean(body.details)
  };

  if (!payload.name || !payload.company || !payload.phone || !payload.details) {
    return NextResponse.json({ message: 'Complete nombre, empresa, teléfono y descripción de la operación.' }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const webhookResponse = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'k9-security-web', ...payload })
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ message: 'No se pudo enviar la solicitud al canal configurado.' }, { status: 502 });
    }

    return NextResponse.json({ message: 'Solicitud enviada. El equipo comercial podrá responderle con los datos recibidos.' });
  }

  const mailTo = process.env.CONTACT_EMAIL_TO;
  if (mailTo) {
    const subject = encodeURIComponent(`Solicitud web - ${payload.service || 'Servicio K9'}`);
    const text = encodeURIComponent(
      `Nombre: ${payload.name}\nEmpresa: ${payload.company}\nTeléfono: ${payload.phone}\nCorreo: ${payload.email || 'No indicado'}\nServicio: ${payload.service || 'No indicado'}\n\nDetalle:\n${payload.details}`
    );

    return NextResponse.json({
      message: 'Solicitud preparada. Se abrirá el correo para enviar los datos al equipo de atención.',
      mailto: `mailto:${mailTo}?subject=${subject}&body=${text}`
    });
  }

  const whatsappNumber = '50766177034';
  const whatsappText = encodeURIComponent(
    `Hola, deseo solicitar un servicio de K9 Security.\n\nNombre: ${payload.name}\nEmpresa: ${payload.company}\nTeléfono: ${payload.phone}\nCorreo: ${payload.email || 'No indicado'}\nServicio: ${payload.service || 'No indicado'}\n\nDetalle:\n${payload.details}`
  );

  return NextResponse.json({
    message: 'Solicitud preparada. Se abrirá WhatsApp para enviar los datos al equipo de atención.',
    whatsapp: `https://wa.me/${whatsappNumber}?text=${whatsappText}`
  });
}
