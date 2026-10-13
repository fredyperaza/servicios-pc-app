"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/lib/site";

const ENLACES = [
  { href: "/servicios", texto: "Servicios" },
  { href: "/catalogo", texto: "Catálogo" },
  { href: "/galerias", texto: "Galerías" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/contacto", texto: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy-deep/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between" aria-label="Principal">
        <Link href="/" className="flex items-center gap-3 text-white font-display font-semibold text-lg tracking-wide">
          <Image src="/logo/escudo.png" alt="" width={36} height={36} className="h-9 w-auto" />
          PROTEKNO
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {ENLACES.map((e) => (
            <Link key={e.href} href={e.href} className="hover:text-white">{e.texto}</Link>
          ))}
          <a href={waLink("un servicio")} target="_blank" rel="noopener noreferrer"
             className="bg-wa text-white font-semibold px-4 py-2 rounded-md hover:brightness-110">
            Cotizar por WhatsApp
          </a>
        </div>

        <button className="md:hidden text-white p-2" aria-label="Abrir menú" aria-expanded={abierto}
                onClick={() => setAbierto(!abierto)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </nav>

      {abierto && (
        <div className="md:hidden bg-navy-deep px-5 pb-6 flex flex-col gap-5 text-slate-300">
          {ENLACES.map((e) => (
            <Link key={e.href} href={e.href} onClick={() => setAbierto(false)} className="hover:text-white">{e.texto}</Link>
          ))}
          <a href={waLink("un servicio")} target="_blank" rel="noopener noreferrer"
             className="bg-wa text-white font-semibold px-4 py-3 rounded-md text-center">
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}