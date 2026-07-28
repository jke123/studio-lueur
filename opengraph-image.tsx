import { ImageResponse } from "next/og";
import { studio } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0E0E14",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#D4A05C",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: "3px solid #D4A05C",
            }}
          />
          {studio.name}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 58,
            color: "#F5F1EA",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          {studio.tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "rgba(245,241,234,0.6)" }}>
          {studio.address}
        </div>
      </div>
    ),
    { ...size }
  );
}
