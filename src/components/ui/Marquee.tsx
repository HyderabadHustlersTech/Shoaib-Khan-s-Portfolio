import type { CSSProperties, ReactNode } from "react";

/**
 * Seamless infinite marquee. Renders the track twice and translates -50%,
 * pausing on hover. Pass `reverse` to flip direction.
 */
export default function Marquee({
  children,
  duration = 40,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`group/marquee relative flex overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex shrink-0"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as CSSProperties
        }
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
