import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="03"
        title="Proyectos"
        description="Trabajo profesional y proyectos personales. Cada uno con su contexto, mi rol y el stack utilizado."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-bg-elevated transition hover:border-fg-subtle"
          >
            {project.cover && (
              <div className="relative aspect-video overflow-hidden border-b border-border bg-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <p className="mono text-[11px] text-fg-subtle">
                    {project.year} · {project.company}
                  </p>
                  <h3 className="text-lg font-semibold text-fg transition group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
                <Badge variant="accent">{project.status}</Badge>
              </div>

              <p className="text-sm leading-relaxed text-fg-muted">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.slice(0, 6).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
                {project.tags.length > 6 && (
                  <Badge variant="outline">+{project.tags.length - 6}</Badge>
                )}
              </div>

              <div className="mt-auto flex items-center gap-3 border-t border-border pt-4 text-xs text-fg-subtle">
                <span className="mono">{project.role}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-bg-elevated/40 p-6 text-center text-sm text-fg-subtle">
          <p className="mono text-[11px] uppercase tracking-wider">Próximo proyecto</p>
          <p>Aquí aparecerá el siguiente.</p>
        </div>
      </div>
    </section>
  );
}
