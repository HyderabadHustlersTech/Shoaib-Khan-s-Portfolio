import type { Milestone } from "@/lib/content";
import MilestoneMedia from "./MilestoneMedia";

export default function MilestoneCard({
  milestone,
  frame,
}: {
  milestone: Milestone;
  frame?: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/30 p-4 transition-colors duration-300 hover:border-gold/40 sm:p-5">
      <MilestoneMedia milestone={milestone} />

      <div className="mt-4 flex flex-1 flex-col">
        {frame && (
          <span className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream-faint">
            {frame}
          </span>
        )}
        <h3 className="font-display text-xl font-bold leading-tight text-cream sm:text-2xl">
          {milestone.title}
        </h3>
        {milestone.description ? (
          <p className="mt-2 text-sm leading-relaxed text-cream-dim">{milestone.description}</p>
        ) : null}
      </div>
    </article>
  );
}
