// data/catalogo.ts

export interface ItemCatalogo {
  id: string;
  titulo: string;
  categoria: 'cctv' | 'biometricos' | 'mantenimiento' | 'redes';
  tipo: 'Paquete' | 'Producto' | 'Servicio';
  descripcionCorta: string;
  detalles: string[];
  precioReferencia?: string;
  destacado?: boolean;
}

export const catalogoNegocio: ItemCatalogo[] = [
  // --- VIDEOVIGILANCIA CCTV ---
  {
    id: 'kit-4-camaras',
    titulo: 'Kit CCTV de 4 cámaras Full HD con grabador DVR',
    categoria: 'cctv',
    tipo: 'Paquete',
    descripcionCorta: 'Videovigilancia completa para tu hogar o negocio, con monitoreo en tiempo real desde el celular.',
    detalles: [
      'Grabador DVR de 4 canales con disco duro instalado',
      '4 cámaras HD para interior o exterior con visión nocturna',
      'Fuentes de poder y conectores de alta calidad',
      'Configuración de la app móvil incluida',
    ],
    precioReferencia: 'Cotización según tu requerimiento',
    destacado: true,
  },
  {
    id: 'kit-2-camaras',
    titulo: 'Kit CCTV de 2 cámaras con grabador',
    categoria: 'cctv',
    tipo: 'Paquete',
    descripcionCorta: 'Opción económica para pequeños negocios y accesos residenciales.',
    detalles: [
      'Grabador DVR básico de alta eficiencia',
      '2 cámaras de alta definición con visión infrarroja',
      'Cableado y accesorios de conexión básicos',
      'Acceso remoto desde el celular',
    ],
    precioReferencia: 'Cotización según tu requerimiento',
    destacado: false,
  },

  // --- CONTROL BIOMÉTRICO ---
  {
    id: 'lector-biometrico',
    titulo: 'Lector biométrico de huella: venta e instalación',
    categoria: 'biometricos',
    tipo: 'Producto',
    descripcionCorta: 'Control de asistencia y acceso para empresas y comercios.',
    detalles: [
      'Terminal de huella digital con registro rápido',
      'Instalación en pared y conexión a la red local',
      'Configuración inicial de turnos y reportes de asistencia',
    ],
    precioReferencia: 'Cotización de equipo e instalación',
    destacado: true,
  },

  // --- MANTENIMIENTO Y REPARACIÓN ---
  {
    id: 'mantenimiento-pc-laptop',
    titulo: 'Mantenimiento preventivo de PC y laptops',
    categoria: 'mantenimiento',
    tipo: 'Servicio',
    descripcionCorta: 'Limpieza y optimización para alargar la vida útil de tu equipo.',
    detalles: [
      'Desarmado y limpieza profunda del polvo',
      'Cambio de pasta térmica del procesador',
      'Limpieza de ventiladores y lubricación de ejes',
      'Optimización del sistema operativo',
    ],
    precioReferencia: 'Precio fijo en taller',
    destacado: true,
  },
  {
    id: 'mantenimiento-consolas',
    titulo: 'Limpieza y mantenimiento de consolas PlayStation',
    categoria: 'mantenimiento',
    tipo: 'Servicio',
    descripcionCorta: 'Soluciona el ruido excesivo y el sobrecalentamiento.',
    detalles: [
      'Desarmado técnico especializado',
      'Retiro del polvo acumulado en disipadores y fuente',
      'Cambio de pasta térmica y revisión de almohadillas térmicas',
      'Pruebas de estrés y temperatura',
    ],
    precioReferencia: 'Precio fijo en taller',
    destacado: false,
  },
  {
    id: 'mantenimiento-dvr',
    titulo: 'Diagnóstico y mantenimiento de grabadores CCTV',
    categoria: 'mantenimiento',
    tipo: 'Servicio',
    descripcionCorta: 'Revisión de discos duros y limpieza interna de tus equipos de videovigilancia.',
    detalles: [
      'Verificación del estado del disco duro (S.M.A.R.T.)',
      'Limpieza interna y actualización de firmware',
      'Revisión de voltajes y fuentes de alimentación',
    ],
    precioReferencia: 'En taller o a domicilio',
    destacado: false,
  },

  // --- REDES E INFRAESTRUCTURA ---
  {
    id: 'cableado-estructurado',
    titulo: 'Instalación de puntos de red Cat6',
    categoria: 'redes',
    tipo: 'Servicio',
    descripcionCorta: 'Conexión estable y ordenada para oficinas, locales y hogares.',
    detalles: [
      'Tendido de cable UTP Categoría 6',
      'Instalación de rosetas y jacks RJ45',
      'Pruebas de conectividad y velocidad',
    ],
    precioReferencia: 'Cotización por punto de red',
    destacado: false,
  },
  {
    id: 'armado-racks',
    titulo: 'Armado y organización de racks y gabinetes de red',
    categoria: 'redes',
    tipo: 'Servicio',
    descripcionCorta: 'Switches, patch panels y cableado ordenados y rotulados.',
    detalles: [
      'Montaje de rack o gabinete mural',
      'Organización del cableado con organizadores',
      'Etiquetado de puertos y conexión de switches',
    ],
    precioReferencia: 'Cotización según el tamaño del rack',
    destacado: false,
  },
];