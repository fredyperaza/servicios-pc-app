const PASOS = [
  { n: "1", titulo: "Nos cuentas qué necesitas", texto: "Por WhatsApp o visita. Revisamos el espacio y el objetivo." },
  { n: "2", titulo: "Recibes tu cotización", texto: "Equipos, mano de obra y tiempos, por escrito." },
  { n: "3", titulo: "Instalamos y configuramos", texto: "Cableado limpio, equipos probados y app en tu celular." },
  { n: "4", titulo: "Te damos soporte", texto: "Mantenimiento y atención si algo falla." },
];

export default function Proceso() {
  return (
    <section id="proceso" className="bg-navy text-white mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl">Cómo trabajamos</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {PASOS.map((p) => (
            <li key={p.n}>
              <span className="font-display text-brand text-2xl">{p.n}</span>
              <h3 className="font-display font-semibold mt-2">{p.titulo}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}