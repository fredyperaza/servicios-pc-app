// components/ProductCard.tsx
import { ItemCatalogo } from '@/data/catalogo';
import BotonCotizar from './BotonCotizar';

interface Props {
  item: ItemCatalogo;
  telefonoWhatsApp: string; // El número de WhatsApp del negocio (ej: '503XXXXXXXX')
}

export default function ProductCard({ item, telefonoWhatsApp }: Props) {
  return (
    <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition duration-200">
      <div>
        {/* Cabecera de la tarjeta (Tipo y Etiqueta de Destacado) */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
            {item.tipo}
          </span>
          {item.destacado && (
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              Popular / Destacado
            </span>
          )}
        </div>

        {/* Título y Descripción */}
        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.titulo}</h3>
        <p className="text-slate-600 text-sm mb-4">{item.descripcionCorta}</p>

        {/* Lista de características o detalles */}
        <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {item.detalles.map((detalle, idx) => (
            <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span className="leading-relaxed">{detalle}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pie de tarjeta con Referencia de precio y Botón de WhatsApp */}
      <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
        {item.precioReferencia && (
          <div className="text-xs font-medium text-slate-500 text-center bg-slate-50 py-1.5 rounded-lg">
            {item.precioReferencia}
          </div>
        )}
        <BotonCotizar tituloItem={item.titulo} telefono={telefonoWhatsApp} />
      </div>
    </div>
  );
}
