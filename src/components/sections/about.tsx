import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="01" title="Sobre mí" description="Quién soy, qué construyo y qué busco." />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="space-y-4 text-base leading-relaxed text-fg-muted">
            {profile.about.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>

        <aside className="space-y-4 rounded-lg border border-border bg-bg-elevated p-5 text-sm">
          <div>
            <p className="mono text-[11px] uppercase tracking-wide text-fg-subtle">Ubicación</p>
            <p className="text-fg">{profile.location}</p>
          </div>
          <div>
            <p className="mono text-[11px] uppercase tracking-wide text-fg-subtle">Email</p>
            <a href={profile.links.email} className="text-fg transition hover:text-accent">{profile.email}</a>
          </div>
          <div>
            <p className="mono text-[11px] uppercase tracking-wide text-fg-subtle">Foco</p>
            <p className="text-fg">Desarrollador web</p>
          </div>
          <div>
            <p className="mono text-[11px] uppercase tracking-wide text-fg-subtle">Idiomas</p>
            <p className="text-fg">Español (nativo) · Inglés (básico/intermedio)</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
