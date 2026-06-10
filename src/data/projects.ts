export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  year: string;
  company: string;
  status: "MVP" | "Producción" | "En desarrollo" | "Académico" | "Pausado";
  tags: string[];
  highlights: string[];
  cover?: string;
  images?: ProjectImage[];
  links?: {
    demo?: string;
    repo?: string;
    case?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "capacinet",
    title: "CapaciNet",
    shortDescription:
      "MVP de plataforma de capacitación empresarial con 3 roles de usuario, evaluaciones, gamificación y reportes.",
    longDescription:
      "CapaciNet es un MVP de plataforma de capacitación empresarial desarrollado para CONSULNETWORKS S.A. Soporta tres tipos de usuarios (Administrador, Representante de Ruta y Trabajador) con interfaces diferenciadas, módulos de evaluaciones, sistema de gamificación con rankings, foros de discusión, muro social y reportes exportables. Construido con arquitectura híbrida SSR + CSR aprovechando Server y Client Components.",
    role: "React & Next.js Developer · Frontend Engineer",
    year: "2025",
    company: "CONSULNETWORKS S.A.",
    status: "MVP",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Axios",
      "JWT",
      "MFA",
      "jsPDF",
    ],
    highlights: [
      "Frontend completo con Next.js 15 (App Router), React 19 y TypeScript, aplicando arquitectura híbrida SSR + CSR.",
      "Dashboards personalizados para tres roles de usuario con protección de rutas y guard de acceso mediante JWT y MFA.",
      "Módulos de evaluaciones, foros de discusión, muro social y sistema de gamificación con rankings.",
      "Reportes exportables a PDF utilizando jsPDF.",
      "Comunicación con APIs REST mediante Axios e interceptores HTTP.",
      "Componentes accesibles construidos con shadcn/ui y Radix UI sobre Tailwind CSS.",
    ],
    cover: "/capacinet/worker.jpg",
    images: [
      {
        src: "/capacinet/worker.jpg",
        alt: "Dashboard del Trabajador en CapaciNet",
        caption:
          "Dashboard del Trabajador — rutas de capacitación asignadas, ranking de gamificación, foro y anuncios.",
      },
      {
        src: "/capacinet/representative.jpg",
        alt: "Panel del Representante en CapaciNet",
        caption:
          "Panel del Representante — gestión de rutas, progreso de usuarios asignados, mejores estudiantes y evaluaciones pendientes.",
      },
      {
        src: "/capacinet/admin.jpg",
        alt: "Administración del Sistema en CapaciNet",
        caption:
          "Administración del Sistema — control total: usuarios, alertas, estado del servidor y estadísticas generales.",
      },
      {
        src: "/capacinet/reports.jpg",
        alt: "Reportes y Analytics en CapaciNet",
        caption:
          "Reportes y Analytics — actividad de usuarios, rendimiento por ruta y ranking de mejores estudiantes con exportación.",
      },
    ],
    featured: true,
  },
  {
    slug: "pelgy-pos",
    title: "PELGY POS",
    shortDescription:
      "Sistema POS web (PWA) para joyería de charms: ventas en tiempo real, facturas PDF térmicas, panel admin completo y modo offline — todo a $0/mes.",
    longDescription:
      "PELGY POS es un sistema de punto de venta web optimizado para vender pulseras de charms personalizados en ferias. Permite registrar ventas desde cualquier dispositivo, genera facturas en PDF formato recibo térmico (80mm) que se suben automáticamente a Supabase Storage y se comparten por WhatsApp, y le da al administrador control total sobre el catálogo, ventas, vendedores y configuración — todo sincronizado en tiempo real con Supabase PostgreSQL. Opera a costo cero usando los free tiers de Supabase y Vercel.",
    role: "Developer",
    year: "2026",
    company: "PELGY",
    status: "Producción",
    tags: [
      "Next.js 14",
      "Supabase",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "PWA",
      "jsPDF",
      "NextAuth.js",
      "Vercel",
    ],
    highlights: [
      "Aplicación construida desde cero con Next.js 14, Supabase (PostgreSQL) y TypeScript, operando a $0/mes en free tiers.",
      "Flujo de dos roles (vendedor + armador vía WhatsApp), panel admin con 7 tabs y catálogo con scroll infinito en tiempo real.",
      "Generación automática de facturas PDF térmicas (80mm, jsPDF) con subida a Supabase Storage y compartir por WhatsApp.",
      "Base de datos PostgreSQL con triggers automáticos para numeración de facturas (F-YYYY-XXXX), políticas RLS y buckets de Storage.",
      "Modo offline con caché de catálogo en localStorage y cola de ventas pendientes que se sincroniza automáticamente al reconectar.",
      "Importador masivo CSV/Excel con mapeo de formato WooCommerce y creación automática de categorías.",
    ],
    cover: "/pelgy-pos/home.png",
    images: [
      {
        src: "/pelgy-pos/home.png",
        alt: "Pantalla de inicio de PELGY POS",
        caption:
          "Pantalla de inicio — acceso al flujo de venta y al panel de administración, optimizada para uso en feria.",
      },
      {
        src: "/pelgy-pos/sale.png",
        alt: "Pantalla de venta en PELGY POS",
        caption:
          "Pantalla de venta — catálogo visual con búsqueda en tiempo real, filtro por categorías, carrito y métodos de pago (efectivo, transferencia, datáfono).",
      },
      {
        src: "/pelgy-pos/admin.png",
        alt: "Panel de administración en PELGY POS",
        caption:
          "Panel de administración — 7 secciones: inicio, configuración, productos, categorías, ventas, importar y vendedores.",
      },
    ],
    links: {
      demo: "https://pelgystore.vercel.app",
      repo: "https://github.com/dev-alzate/Charms-app",
    },
    featured: true,
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
