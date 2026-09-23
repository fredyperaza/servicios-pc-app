// data/catalog.ts

export interface ItemCatalogo {
  id: string;
  titulo: string;
  categoria: 'cctv' | 'biometricos' | 'mantenimiento' | 'redes';
  tipo: 'producto' | 'servicio' | 'paquete';
  descripcionCorta: string;
  detalles: string[];
  precioReferencia?: string;
  destacado?: boolean;
}

export const catalogoNegocio: ItemCatalogo[] = [
  // --- CCTV Y VIDEOVIGILANCIA ---
  {
    id: 'kit-4-camaras',
    titulo: 'Kit CCTV 4 Cámaras Full HD + Grabador (DVR)',
    categoria: 'cctv',
    tipo: 'paquete',
    descripcionCorta: 'Sistema completo de videovigilancia con monitoreo en tiempo real desde el celular.',
    detalles: [
      'Grabador DVR de 4 canales con disco duro instalado',
      '4 cámaras de seguridad HD aptas para interior/exterior con visión nocturna',
      'Fuentes de poder y conectores de alta calidad',
      'Configuración de app móvil incluida'
    ],
    precioReferencia: 'Cotizar según requerimiento',
    destacado: true
  },
  {
    id: 'kit-2-camaras',
    titulo: 'Kit CCTV 2 Cámaras de Seguridad + Grabador',
    categoria: 'cctv',
    tipo: 'paquete',
    descripcionCorta: 'Solución ideal y económica para pequeños negocios o accesos residenciales.',
    detalles: [
      'Grabador DVR básico de alta eficiencia',
      '2 cámaras de alta definición con visión infrarroja',
      'Cableado y accesorios de conexión básicos',
      'Acceso remoto desde el teléfono celular'
    ],
    precioReferencia: 'Cotizar según requerimiento',
    destacado: false
  },

  // --- CONTROL BIOMÉTRICO ---
  {
    id: 'lector-biometrico',
    titulo: 'Venta e Instalación de Lector Biométrico de Huella',
    categoria: 'biometricos',
    tipo: 'producto',
    descripcionCorta: 'Control de asistencia y acceso profesional para empresas y comercios.',
    detalles: [
      'Terminal biométrica de huella digital y registro rápido',
      'Instalación física en pared y conexión a red local',
      'Configuración inicial de software de turnos y reportes de asistencia'
    ],
    precioReferencia: 'Cotizar equipo e instalación',
    destacado: true
  },

  // --- MANTENIMIENTO Y REPARACIÓN ---
  {
    id: 'mantenimiento-pc-laptop',
    titulo: 'Mantenimiento Preventivo y Limpieza (PC / Laptops)',
    categoria: 'mantenimiento',
    tipo: 'servicio',
    descripcionCorta: 'Optimización térmica y física para alargar la vida útil de tus equipos.',
    detalles: [
      'Desensamble completo y limpieza profunda de polvo',
      'Reemplazo de pasta térmica de alto rendimiento en procesador',
      'Limpieza de ventiladores y lubricación de ejes',
      'Optimización de sistema operativo'
    ],
    precioReferencia: 'Precio fijo de taller',
    destacado: true
  },
  {
    id: 'mantenimiento-consolas',
    titulo: 'Limpieza y Mantenimiento de Consolas (PlayStation)',
    categoria: 'mantenimiento',
    tipo: 'servicio',
    descripcionCorta: 'Solución al ruido excesivo y problemas de sobrecalentamiento.',
    detalles: [
      'Desensamble técnico especializado',
      'Retiro de polvo acumulado en disipadores y fuente',
      'Cambio de pasta térmica y revisión de almohadillas térmicas',
      'Pruebas de estrés y temperatura'
    ],
    precioReferencia: 'Precio fijo de taller',
    destacado: false
  },
  {
    id: 'mantenimiento-dvr',
    titulo: 'Diagnóstico y Mantenimiento de Grabadores CCTV',
    categoria: 'mantenimiento',
    tipo: 'servicio',
    descripcionCorta: 'Revisión de discos duros y limpieza interna de equipos de videovigilancia.',
    detalles: [
      'Verificación del estado de salud del disco duro (S.M.A.R.T.)',
      'Limpieza interna y actualización de firmware',
      'Revisión de voltajes y fuentes de alimentación'
    ],
    precioReferencia: 'Servicio en taller o domicilio',
    destacado: false
  },

  // --- REDES E INFRAESTRUCTURA ---
  {
    id: 'cableado-estructurado',
    titulo: 'Instalación de Redes Cableadas (Puntos de Red Cat6)',
    categoria: 'redes',
    tipo: 'servicio',
    descripcionCorta: 'Conectividad estable y ordenada para oficinas, locales y hogares.',
    detalles: [
      'Tendido de cable UTP Categoría 6',
      'Instalación de rosetas y jacks RJ45',
      'Pruebas de conectividad y velocidad'
    ],
    precioReferencia: 'Cotizar por punto de red',
    destacado: false
  },
  {
    id: 'armado-racks',
    titulo: 'Armado, Peinado y Montaje de Racks / Gabinetes de Red',
    categoria: 'redes',
    tipo: 'servicio',
    descripcionCorta: 'Organización profesional de switches, patch panels y cableado de red.',
    detalles: [
      'Montaje de rack o gabinete mural',
      'Instalación y ordenamiento con organizadores de cables',
      'Etiquetado de puertos y conexión de switches'
    ],
    precioReferencia: 'Cotizar según tamaño del rack',
    destacado: false
  }
];