// lib/site.ts
export const SITE = {
  nombre: "ProTekno",
  // Número con código de país, sin + ni espacios. Ejemplo: 50370001234
  telefonoWhatsApp: "50370000000",
  ubicacion: "Santa Ana, El Salvador",
  horario: "Lunes a viernes, 8:00 a.m. a 5:00 p.m.", // Ajústalo a tu horario real
};

export const waLink = (texto: string) =>
  `https://wa.me/${SITE.telefonoWhatsApp}?text=${encodeURIComponent(
    `Hola ProTekno, quiero cotizar: ${texto}`
  )}`;