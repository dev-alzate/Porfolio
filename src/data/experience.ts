export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  type?: "Pasantía" | "Full-Time" | "Freelance" | "Contractor";
};

export const experience: ExperienceEntry[] = [
  {
    company: "CONSULNETWORKS S.A.",
    role: "Desarrollador Web",
    period: "Julio 2025 — Diciembre 2025",
    location: "Cali, Colombia · Presencial",
    type: "Pasantía",
    description:
      "Desarrollo frontend de CapaciNet, plataforma MVP de capacitación empresarial con tres tipos de usuarios, evaluaciones, gamificación y reportes exportables.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JWT", "MFA", "Axios"],
  },
  {
    company: "Universidad Autónoma de Occidente",
    role: "Ingeniería Informática",
    period: "2020 — 2025",
    location: "Cali, Colombia",
    description:
      "Formación en algoritmos, estructuras de datos, ingeniería de software y desarrollo de aplicaciones. Modalidad de grado: pasantía organizacional en CONSULNETWORKS S.A.",
    tags: ["Educación", "Algoritmos", "POO", "Bases de datos"],
  },
];
