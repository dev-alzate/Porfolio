"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/#about", label: "Sobre mí" },
  { href: "/#skills", label: "Stack" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#experience", label: "Experiencia" },
  { href: "/#contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="mono text-sm font-medium text-fg transition hover:text-accent">
          <span className="text-accent">dev-alzate</span> 
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-1.5 text-sm text-fg-muted transition hover:bg-bg-elevated hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="/#contact" className="hidden rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-xs text-fg-muted transition hover:text-fg md:inline-flex">
            Contactar
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
