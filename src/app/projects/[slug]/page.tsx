import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/#projects" className="mb-10 inline-flex items-center gap-2 text-sm text-fg-muted transition hover:text-fg">
        <ArrowLeft className="h-4 w-4" />
        Volver a proyectos
      </Link>

      <header className="mb-10 border-b border-border pb-8">
        <div className="mb-4 flex items-center gap-3">
          <Badge variant="accent">{project.status}</Badge>
          <span className="mono text-[11px] text-fg-subtle">{project.year} · {project.company}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{project.title}</h1>
        <p className="mt-3 text-base text-fg-muted">{project.shortDescription}</p>
        <p className="mono mt-4 text-xs text-fg-subtle">{project.role}</p>
      </header>

      <section className="space-y-12">
        <div>
          <h2 className="mono mb-3 text-[11px] uppercase tracking-wider text-fg-subtle">Sobre el proyecto</h2>
          <p className="text-base leading-relaxed text-fg-muted">{project.longDescription}</p>
        </div>

        {project.images && project.images.length > 0 && (
          <div>
            <h2 className="mono mb-4 text-[11px] uppercase tracking-wider text-fg-subtle">Capturas del producto</h2>
            <div className="space-y-8">
              {project.images.map((img, i) => (
                <figure key={img.src} className="overflow-hidden rounded-lg border border-border bg-bg-elevated">
                  <div className="border-b border-border bg-bg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="block w-full"
                    />
                  </div>
                  <figcaption className="flex items-start gap-3 px-5 py-3 text-sm text-fg-muted">
                    <span className="mono mt-0.5 select-none text-accent">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{img.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="mono mb-3 text-[11px] uppercase tracking-wider text-fg-subtle">Mi participación</h2>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                <span className="mono mt-0.5 select-none text-accent">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mono mb-3 text-[11px] uppercase tracking-wider text-fg-subtle">Stack</h2>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        </div>

        {project.links && (project.links.demo || project.links.repo) && (
          <div>
            <h2 className="mono mb-3 text-[11px] uppercase tracking-wider text-fg-subtle">Enlaces</h2>
            <div className="flex gap-2">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-xs text-fg transition hover:border-fg-subtle">
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </a>
              )}
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-xs text-fg transition hover:border-fg-subtle">
                  <Github className="h-3.5 w-3.5" /> Repositorio
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
