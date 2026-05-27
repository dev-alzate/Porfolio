# Portafolio — Carlos Andrés Alzate

Portafolio personal de Carlos Andrés Alzate, Desarrollador Web.
Construido con **Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion**.

## Empezar

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de producción
```

## Estructura

```
src/
├── app/                      rutas (App Router)
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              landing con todas las secciones
│   └── projects/[slug]/      detalle de cada proyecto
├── components/
│   ├── sections/             Hero, About, Skills, Projects, Experience, Contact
│   ├── ui/                   componentes reutilizables (Badge, SkillDots, ...)
│   ├── navbar.tsx · footer.tsx · theme-provider.tsx · theme-toggle.tsx
├── data/                     ← EDITA AQUÍ PARA AGREGAR CONTENIDO
│   ├── profile.ts            info personal, links, perfil
│   ├── skills.ts             skills y tools con niveles
│   ├── projects.ts           lista de proyectos (con imágenes)
│   └── experience.ts         lista de experiencia
└── lib/utils.ts
public/
├── CV_Carlos_Alzate_ES.docx  CV en español
├── CV_Carlos_Alzate_EN.docx  CV en inglés
└── capacinet/                mockups de CapaciNet
    ├── worker.jpg
    ├── representative.jpg
    ├── admin.jpg
    └── reports.jpg
```

## Agregar un proyecto nuevo

Edita `src/data/projects.ts` y añade un objeto al array:

```ts
{
  slug: "mi-proyecto",
  title: "Mi Proyecto",
  shortDescription: "Descripción corta para la tarjeta.",
  longDescription: "Descripción larga para la página de detalle.",
  role: "Tu rol",
  year: "2026",
  company: "Empresa",
  status: "Producción",
  tags: ["React", "TypeScript"],
  highlights: ["Logro 1", "Logro 2"],
  cover: "/mi-proyecto/cover.jpg",            // opcional
  images: [
    { src: "/mi-proyecto/screen1.jpg", alt: "Pantalla 1", caption: "Dashboard principal" },
    { src: "/mi-proyecto/screen2.jpg", alt: "Pantalla 2", caption: "Vista de usuarios" },
  ],
  links: { demo: "https://...", repo: "https://..." },
}
```

Coloca las imágenes en `public/mi-proyecto/` y el portafolio las muestra automáticamente.

## Despliegue en Vercel

1. Sube el repo a GitHub.
2. Entra a [vercel.com](https://vercel.com) → Import Project → selecciona el repo.
3. Deploy. Te queda en `https://tu-portafolio.vercel.app`.
4. Para dominio propio: Settings → Domains → Add Domain.
