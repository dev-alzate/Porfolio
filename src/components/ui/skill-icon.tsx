import type { ComponentType } from "react";
import { VscAzure } from "react-icons/vsc";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiNestjs, SiPython, SiMongodb, SiPytest,
  SiGit, SiGithub, SiPostman, SiJira, SiFigma, SiDocker
} from "react-icons/si";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  react: SiReact, nextjs: SiNextdotjs, typescript: SiTypescript,
  javascript: SiJavascript, html5: SiHtml5, css3: SiCss,
  tailwindcss: SiTailwindcss, nodejs: SiNodedotjs, nestjs: SiNestjs,
  python: SiPython, mongodb: SiMongodb, pytest: SiPytest,
  git: SiGit, github: SiGithub, postman: SiPostman,
  jira: SiJira, figma: SiFigma, docker: SiDocker, azuredevops: VscAzure,
};

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name];
  return Icon ? <Icon className={className} /> : null;
}