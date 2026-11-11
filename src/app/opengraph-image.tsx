import { ImageResponse } from "next/og";

export const alt = "Mateo Álvarez | Automatización y software a medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF8F4",
          padding: 80,
          color: "#16201B",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#1E7B54" }}>Mateo Álvarez</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
          Automatizo procesos manuales y construyo software a medida.
        </div>
        <div style={{ fontSize: 30, color: "#4B5A52" }}>Para pymes y empresas · Uruguay</div>
      </div>
    ),
    size
  );
}
