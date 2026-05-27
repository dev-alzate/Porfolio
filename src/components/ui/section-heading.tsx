import type { ReactNode } from "react";

type Props = { index: string; title: string; description?: ReactNode };

export function SectionHeading({ index, title, description }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="mono text-xs text-accent">{index}</span>
        <span className="h-px w-12 bg-border" />
        <h2 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{title}</h2>
      </div>
      {description && <p className="max-w-2xl text-sm text-fg-muted">{description}</p>}
    </div>
  );
}
