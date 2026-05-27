import { SectionHeading } from "@/components/ui/section-heading";
import { SkillDots } from "@/components/ui/skill-dots";
import { skills, tools, type Skill } from "@/data/skills";
import { SkillIcon } from "../ui/skill-icon";

function SkillList({ title, items }: { title: string; items: Skill[] }) {
  return (

    <div className="rounded-lg border border-border bg-bg-elevated p-6">
      <h3 className="mono mb-5 text-[11px] uppercase tracking-wider text-fg-subtle">{title}</h3>
      <ul className="space-y-3">
        {items.map((s) => (
          <li key={s.name} className="flex items-center gap-3">
            <SkillIcon name={s.icon} className="h-4 w-4 text-fg-muted" />
            <span className="text-sm text-fg flex-1">{s.name}</span>
            <SkillDots level={s.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="02"
        title="Stack"
        description="Tecnologías con las que trabajo y herramientas que uso a diario. Los puntos son una autoevaluación, no un dogma."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <SkillList title="Skills" items={skills} />
        <SkillList title="Tools" items={tools} />
      </div>
    </section>
  );
}
