import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="05"
        title="Contacto"
        description="Estoy abierto a oportunidades y conversaciones. La forma más rápida de llegarme es por email o LinkedIn."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <a href={profile.links.email} className="group flex items-center justify-between rounded-lg border border-border bg-bg-elevated p-6 transition hover:border-fg-subtle hover:bg-bg">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent"><Mail className="h-5 w-5" /></span>
            <div>
              <p className="mono text-[11px] uppercase tracking-wider text-fg-subtle">Email</p>
              <p className="text-sm text-fg">{profile.email}</p>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-fg-subtle transition group-hover:text-fg" />
        </a>

        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg border border-border bg-bg-elevated p-6 transition hover:border-fg-subtle hover:bg-bg">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent"><Linkedin className="h-5 w-5" /></span>
            <div>
              <p className="mono text-[11px] uppercase tracking-wider text-fg-subtle">LinkedIn</p>
              <p className="text-sm text-fg">linkedin.com/in/dev-alzate</p>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-fg-subtle transition group-hover:text-fg" />
        </a>

        <a href={profile.links.github} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg border border-border bg-bg-elevated p-6 transition hover:border-fg-subtle hover:bg-bg">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent"><Github className="h-5 w-5" /></span>
            <div>
              <p className="mono text-[11px] uppercase tracking-wider text-fg-subtle">GitHub</p>
              <p className="text-sm text-fg">github.com/dev-alzate</p>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-fg-subtle transition group-hover:text-fg" />
        </a>

        <div className="rounded-lg border border-border bg-bg-elevated p-6">
          <p className="mono text-[11px] uppercase tracking-wider text-fg-subtle">CV</p>
          <p className="mb-3 text-sm text-fg">Descarga mi hoja de vida</p>
          <div className="flex gap-2">
            <a href={profile.links.cvEs} className="inline-flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-fg transition hover:border-fg-subtle">
              <FileText className="h-3.5 w-3.5" /> Español
            </a>
            <a href={profile.links.cvEn} className="inline-flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-fg transition hover:border-fg-subtle">
              <FileText className="h-3.5 w-3.5" /> English
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
