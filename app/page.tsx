// app/page.tsx
"use client";

import { useState } from "react";
import { catalogoNegocio } from "@/data/catalogo";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import BannerBand from "@/components/BannerBand";
import Proceso from "@/components/Proceso";
import ContactoCTA from "@/components/ContactoCTA";
import { SITE } from "@/lib/site";

const categoriasFiltro = [
  { id: "todos", nombre: "Ver todo" },
  { id: "cctv", nombre: "Cámaras y CCTV" },
  { id: "biometricos", nombre: "Biométricos" },
  { id: "mantenimiento", nombre: "Mantenimiento de PC y consolas" },
  { id: "redes", nombre: "Redes y racks" },
];

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  const itemsFiltrados =
    categoriaActiva === "todos"
      ? catalogoNegocio
      : catalogoNegocio.filter((item) => item.categoria === categoriaActiva);

  return (
    <main>
      <Hero />
      <TrustStrip />
      <BannerBand />

      <section id="catalogo" className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-navy">Paquetes y servicios</h2>
        <p className="mt-3 max-w-xl">Elige una categoría o escríbenos con lo que necesitas y te cotizamos.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categoriasFiltro.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`px-4 py-2 rounded-md text-sm border transition ${
                categoriaActiva === cat.id
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy border-slate-300 hover:bg-slate-100"
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsFiltrados.map((item) => (
            <ProductCard key={item.id} item={item} telefonoWhatsApp={SITE.telefonoWhatsApp} />
          ))}
        </div>
      </section>

      <Proceso />
      <ContactoCTA />
    </main>
  );
}