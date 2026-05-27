import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="04" title="Experiencia" description="Mi trayectoria profesional y formativa hasta hoy." />

      <ol className="relative ml-3 space-y-10 border-l border-border pl-6">
        {experience.map((entry, i) => (
          <li key={`${entry.company}-${i}`} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent" aria-hidden />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-fg">
                  {entry.role} <span className="font-normal text-fg-muted">· {entry.company}</span>
                </h3>
                <span className="mono text-[11px] text-fg-subtle">{entry.period}</span>
              </div>
              <p className="mono text-[11px] text-fg-subtle">
                {entry.location}
                {entry.type && (<>{" · "}<span className="text-accent">{entry.type}</span></>)}
              </p>
              <p className="text-sm leading-relaxed text-fg-muted">{entry.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {entry.tags.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
