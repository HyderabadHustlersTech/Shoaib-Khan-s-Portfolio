import { signature } from "@/lib/content";

/**
 * The signature PNG is a 250×250 canvas with large transparent padding.
 * This crops to the ink band via object-cover so it displays large and crisp
 * at any height, and (being a fixed-aspect block) never stretches in a flex row.
 * Size it by setting a height class, e.g. <SignatureMark className="h-12" />.
 */
export default function SignatureMark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Shoaib Khan"
      className={`block shrink-0 overflow-hidden ${className}`}
      style={{ aspectRatio: "250 / 108" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={signature}
        alt="Shoaib Khan signature"
        className="h-full w-full scale-110 object-cover object-center"
      />
    </span>
  );
}
