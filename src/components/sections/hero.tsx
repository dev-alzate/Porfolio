"use client";

import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg mask-radial opacity-50" aria-hidden />

      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-24 sm:px-6 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-2 text-xs text-fg-muted"
        >
          {profile.available && (
            <span className="flex items-center gap-2">
              <span className="status-dot animate-pulse-dot" />
              <span className="mono">Disponible para trabajar</span>
            </span>
          )}
          <span className="text-fg-subtle">·</span>
          <span className="mono flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {profile.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl"
        >
          {profile.name}.{" "}
          <span className="text-fg-muted">{profile.role}</span>{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl text-base text-fg-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <a href="/#projects" className="group inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90">
            Ver proyectos
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-elevated px-4 py-2 text-sm font-medium text-fg transition hover:bg-bg">
            Contactar
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="/CV_Carlos_Alzate_EN.docx"
            download="CV_Carlos_Alzate_EN.docx"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-fg-muted transition hover:text-fg"
          >
            <FileText className="h-4 w-4" />
            Descargar CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center gap-4 text-fg-subtle"
        >
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="transition hover:text-fg" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-fg" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section >
  );
}
