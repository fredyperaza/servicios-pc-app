// app/page.tsx
'use client';

import { useState } from 'react';
import { catalogoNegocio } from '@/data/catalogo';
import ProductCard from '@/components/ProductCard';

// ⚠️ CAMBIA ESTE NÚMERO por el WhatsApp real de la empresa (Ej: código de país + número, sin signos ni espacios)
const TELEFONO_WHATSAPP = '50370000000'; 

const categoriasFiltro = [
  { id: 'todos', nombre: 'Ver Todo' },
  { id: 'cctv', nombre: '📹 Cámaras y CCTV' },
  { id: 'biometricos', nombre: '👆 Biométricos' },
  { id: 'mantenimiento', nombre: '💻 Mantenimiento PC / Consolas' },
  { id: 'redes', nombre: '🌐 Redes y Racks' },
];

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const itemsFiltrados = categoriaActiva === 'todos'
    ? catalogoNegocio
    : catalogoNegocio.filter((item) => item.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. SECCIÓN HERO / ENCABEZADO */}
      <header className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Santa Ana & Cobertura Nacional
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4 tracking-tight">
            Servicios a las PC's y M@s
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Expertos en soporte técnico para computadoras y consolas, infraestructura de redes, control de asistencia biométrico y sistemas de videovigilancia CCTV.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${TELEFONO_WHATSAPP}?text=Hola,%20necesito%20una%20cotización%20general%20o%20soporte%20técnico.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200 flex items-center gap-2"
            >
              <span>Escribir al WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. SECCIÓN DE CATEGORÍAS Y CATÁLOGO */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Nuestros Servicios y Paquetes</h2>
          <p className="text-slate-600 text-sm">Selecciona una categoría o cotiza directamente el servicio que necesites.</p>
        </div>

        {/* Botones de Filtro */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoriasFiltro.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition duration-200 ${
                categoriaActiva === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Grid de Productos / Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsFiltrados.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              telefonoWhatsApp={TELEFONO_WHATSAPP}
            />
          ))}
        </div>
      </main>

      {/* 3. FOOTER BÁSICO */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-xs border-t border-slate-800 mt-20">
        <p>© {new Date().getFullYear()} Servicios a las PC's y M@s. Todos los derechos reservados.</p>
        <p className="mt-1">Santa Ana, El Salvador.</p>
      </footer>
    </div>
  );
}