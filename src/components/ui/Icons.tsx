import type { SVGProps } from "react";

/** Inline icon set — no icon-library dependency, styled via currentColor. */

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const LinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={0} fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.6 8.65 22 10.6 22 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.03-3.34-2.03 0-2.34 1.59-2.34 3.23V21H9V9Z" />
  </svg>
);

export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
  </svg>
);

export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m3 6 9 6 9-6" />
  </svg>
);

export const ArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 4v16M6 14l6 6 6-6" />
  </svg>
);

export const Play = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" strokeWidth={0}>
    <path d="M6 4.8v14.4a1 1 0 0 0 1.5.87l12-7.2a1 1 0 0 0 0-1.74l-12-7.2A1 1 0 0 0 6 4.8Z" />
  </svg>
);

export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" strokeWidth={0}>
    <path d="M12 2.5c.4 4.9 1.6 6.1 6.5 6.5-4.9.4-6.1 1.6-6.5 6.5-.4-4.9-1.6-6.1-6.5-6.5C10.4 8.6 11.6 7.4 12 2.5Z" />
  </svg>
);
