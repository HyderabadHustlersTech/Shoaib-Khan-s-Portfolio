import { ImageResponse } from "next/og";
import { signatureDataUri } from "@/lib/og-signature";

export const alt = "Shoaib Khan — Content Creator, Director & Video Editor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded link-preview card: the signature is the hero, on the site's gold-on-black identity.
export default function OpengraphImage() {
  const sigWidth = 700;
  const sigHeight = Math.round((sigWidth * 55) / 191);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0a0908",
          padding: "96px",
          position: "relative",
        }}
      >
        {/* gold corner accent */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(254,189,89,0.09)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 10,
            color: "#b7ab95",
            marginBottom: 34,
          }}
        >
          HYDERABAD, INDIA
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={signatureDataUri} width={sigWidth} height={sigHeight} alt="Shoaib Khan" />

        <div style={{ width: 150, height: 4, background: "#febd59", margin: "46px 0 34px" }} />

        <div style={{ display: "flex", fontSize: 40, color: "#efe7d7", fontWeight: 600 }}>
          Content Creator · Director · Writer · Video Editor
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#febd59", marginTop: 16 }}>
          Co-Founder of Hyderabad Hustlers
        </div>
      </div>
    ),
    { ...size }
  );
}
