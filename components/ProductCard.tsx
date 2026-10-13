// components/ProductCard.tsx
import { ItemCatalogo } from "@/data/catalogo";
import BotonCotizar from "./BotonCotizar";

interface Props {
  item: ItemCatalogo;
  telefonoWhatsApp: string; // El número de WhatsApp del negocio
}

export default function ProductCard({ item, telefonoWhatsApp }: Props) {
  return (
    <article className="border border-slate-200 rounded-xl p-6 bg-white flex flex-col justify-between hover:border-brand transition-colors">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 text-xs">
          <span className="font-semibold text-brand">{item.tipo}</span>
          {item.destacado && (
            <span className="font-medium bg-navy text-white px-2.5 py-1 rounded">Más solicitado</span>
          )}
        </div>

        <h3 className="font-display font-semibold text-navy text-lg leading-snug mb-2">{item.titulo}</h3>
        <p className="text-sm mb-5">{item.descripcionCorta}</p>

        <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-4">
          {item.detalles.map((detalle, idx) => (
            <li key={idx} className="text-sm flex items-start gap-2">
              <span className="text-brand font-bold" aria-hidden="true">✓</span>
              <span className="leading-relaxed">{detalle}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
        {item.precioReferencia && (
          <p className="text-xs text-center text-slate-500 bg-slate-50 py-2 rounded">{item.precioReferencia}</p>
        )}
        <BotonCotizar tituloItem={item.titulo} telefono={telefonoWhatsApp} />
      </div>
    </article>
  );
}