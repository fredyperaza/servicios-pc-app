import { SITE, waLink } from "@/lib/site";

export default function ContactoCTA() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-navy">Hablemos de tu proyecto</h2>
        <p className="mt-4 max-w-md">
          Cuéntanos qué quieres proteger o conectar. Respondemos por WhatsApp con una propuesta.
        </p>
        <a href={waLink("un servicio")} target="_blank" rel="noopener noreferrer"
           className="inline-block mt-7 bg-wa text-white font-semibold px-6 py-3 rounded-md hover:brightness-110 w-full sm:w-auto text-center">
          Escribir por WhatsApp
        </a>
      </div>
      <dl className="text-sm divide-y divide-slate-200 border-y border-slate-200">
        <div className="py-4 flex justify-between gap-4"><dt className="font-semibold text-navy">Ubicación</dt><dd>{SITE.ubicacion}</dd></div>
        <div className="py-4 flex justify-between gap-4"><dt className="font-semibold text-navy">Cobertura</dt><dd>Todo El Salvador</dd></div>
        <div className="py-4 flex justify-between gap-4"><dt className="font-semibold text-navy">Horario</dt><dd className="text-right">{SITE.horario}</dd></div>
      </dl>
    </section>
  );
}