const PUNTOS = [
  { titulo: "Instalación profesional", texto: "Cableado ordenado y equipos configurados." },
  { titulo: "Acceso desde el celular", texto: "Ves tus cámaras en tiempo real." },
  { titulo: "Soporte posterior", texto: "Seguimos contigo después de instalar." },
  { titulo: "Cotización clara", texto: "Según tu espacio y requerimiento." },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {PUNTOS.map((p) => (
          <p key={p.titulo}>
            <strong className="block text-navy font-display">{p.titulo}</strong>
            {p.texto}
          </p>
        ))}
      </div>
    </section>
  );
}