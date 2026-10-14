import Rack from "./Rack";
import { waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-navy-deep text-white hero-grid">
      <div className="max-w-6xl mx-auto px-5 py-12 sm:py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <p className="text-brand text-sm font-medium mb-4">Santa Ana y cobertura nacional</p>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Infraestructura de redes y seguridad electrónica para tu hogar o empresa
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-lg">
            Instalamos y damos soporte a sistemas de videovigilancia, cableado estructurado y control de asistencia biométrico.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={waLink("un servicio")} target="_blank" rel="noopener noreferrer"
               className="bg-wa text-white font-semibold px-6 py-3 rounded-md hover:brightness-110 text-center">
              Cotizar por WhatsApp
            </a>
            <a href="#catalogo"
               className="border border-white/25 text-white px-6 py-3 rounded-md hover:bg-white/10 text-center">
              Ver servicios
            </a>
          </div>
        </div>
        <Rack />
      </div>
    </section>
  );
}