import { Fragment, type ReactNode } from "react";
import { about } from "@/lib/content";

/**
 * Highlights key phrases in gold without dangerouslySetInnerHTML.
 * Same matching behaviour as the original site (longest-match-first, no overlaps).
 */
export default function HighlightedText({
  text,
  terms = about.highlightTerms as unknown as string[],
}: {
  text: string;
  terms?: string[];
}) {
  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const matches: { start: number; end: number; phrase: string }[] = [];

  for (const phrase of sorted) {
    const re = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      const start = m.index;
      const end = start + m[0].length;
      const overlaps = matches.some(
        (x) => (start >= x.start && start < x.end) || (end > x.start && start < x.start)
      );
      if (!overlaps) matches.push({ start, end, phrase: m[0] });
    }
  }

  matches.sort((a, b) => a.start - b.start);

  const parts: ReactNode[] = [];
  let last = 0;
  matches.forEach((m, i) => {
    if (m.start > last) parts.push(<Fragment key={`t-${i}`}>{text.slice(last, m.start)}</Fragment>);
    parts.push(
      <span key={`h-${i}`} className="font-semibold text-gold">
        {m.phrase}
      </span>
    );
    last = m.end;
  });
  if (last < text.length) parts.push(<Fragment key="tail">{text.slice(last)}</Fragment>);

  return <>{parts}</>;
}
