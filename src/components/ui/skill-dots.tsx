import { cn } from "@/lib/utils";

type Props = { level: 1 | 2 | 3 | 4 | 5; className?: string };

export function SkillDots({ level, className }: Props) {
  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={`Nivel ${level} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={cn("h-1.5 w-1.5 rounded-full transition", i < level ? "bg-accent" : "bg-border")} />
      ))}
    </div>
  );
}
