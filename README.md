# K9 Security International, S.A. - Web corporativa

Web corporativa responsive creada para GitHub + Vercel con Next.js, TypeScript, imágenes optimizadas y estructura SEO por servicios.

## Tecnología

- Next.js App Router
- TypeScript
- CSS responsive personalizado
- Imágenes WebP optimizadas
- Metadata SEO por página
- Sitemap y robots automáticos
- Schema JSON-LD para Organization, LocalBusiness, ProfessionalService y Service
- Formulario listo para conectar con webhook o correo en Vercel

## Estructura principal

- `/` Home corporativa
- `/empresa` Información institucional
- `/servicios` Listado de servicios
- `/servicios/[slug]` Páginas SEO individuales por servicio
- `/sectores` Sectores atendidos
- `/basc` Certificación y respaldo documental
- `/contacto` Solicitud comercial

## Cambiar entre los dos modelos de hero

En `lib/site.ts` está la opción:

```ts
heroVariant: 'operativo'
```

Valores disponibles:

```ts
'operativo'
'institucional'
```

- `operativo`: hero grande con foto de inspección K9 en camión.
- `institucional`: hero tipo split/collage con BASC y fotos operativas.

## Contacto

WhatsApp configurado para contacto directo: +507 6617-7034. Si se desea reemplazar en Vercel, configurar:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=50766177034
NEXT_PUBLIC_CONTACT_EMAIL=correo@empresa.com
```

Para recibir el formulario automáticamente, usar una de estas variables:

```bash
CONTACT_WEBHOOK_URL=https://...
CONTACT_EMAIL_TO=correo@empresa.com
CONTACT_WHATSAPP_NUMBER=50766177034
```

Recomendado: usar `CONTACT_WEBHOOK_URL` con Make, Zapier, n8n o endpoint propio.

## BASC

El documento recibido se incluyó en:

```text
public/docs/certificado-basc-k9-security-international.pdf
```

La web evita afirmar “certificación vigente” porque el certificado recibido muestra vencimiento 2025-11-22. Cuando el cliente entregue el certificado renovado, reemplazar el PDF e imagen en:

```text
public/docs/
public/images/k9/basc-certificado.webp
```

Y ajustar el texto de `lib/site.ts` si aplica.

## Instalación local

```bash
npm install
npm run dev
```

## Build para producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Subir el proyecto a GitHub.
2. Importar el repositorio en Vercel.
3. Configurar las variables de entorno.
4. Ejecutar deploy.

