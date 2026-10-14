const UNIDADES = [
  { nombre: "Patch panel 24p", puertos: 24 },
  { nombre: "Switch PoE", puertos: 16 },
  { nombre: "NVR / DVR", puertos: 8 },
];

export default function Rack() {
  return (
    <div className="rack" aria-hidden="true">
      {UNIDADES.map((u, idx) => (
        <div className="rack-unit" key={u.nombre}>
          <span>{u.nombre}</span>
          <div className="ports">
            {Array.from({ length: u.puertos }, (_, i) => {
              const activo = (i * 7 + idx * 3) % 5 !== 0;
              const parpadea = activo && (i + idx) % 6 === 0;
              return <i key={i} className={`${activo ? "on" : ""} ${parpadea ? "blink" : ""}`} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}