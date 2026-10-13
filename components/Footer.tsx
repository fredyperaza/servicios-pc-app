import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-wrap justify-between gap-3">
        <span className="font-display text-white">PROTEKNO</span>
        <span>Redes, videovigilancia y control de acceso. {SITE.ubicacion}.</span>
        <span>© {new Date().getFullYear()} {SITE.nombre}</span>
      </div>
    </footer>
  );
}