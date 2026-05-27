import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="mono text-xs text-fg-subtle">© {year} · {profile.name}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-fg-muted transition hover:bg-bg hover:text-fg">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-fg-muted transition hover:bg-bg hover:text-fg">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={profile.links.email} aria-label="Email" className="rounded-md p-2 text-fg-muted transition hover:bg-bg hover:text-fg">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
