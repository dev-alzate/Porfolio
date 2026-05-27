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
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
