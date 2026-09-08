import { ImageResponse } from "next/og";
import { profile } from "@/content";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090B",
          padding: "72px 76px",
          color: "#E8EAED",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#2FE0C0",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#2FE0C0",
            }}
          >
            {profile.badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              letterSpacing: -2.4,
              lineHeight: 1.08,
              maxWidth: 930,
            }}
          >
            {profile.tagline}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 27 }}>
            <span style={{ fontWeight: 600 }}>{profile.name}</span>
            <span style={{ color: "#262C34" }}>/</span>
            <span style={{ color: "#8B939E" }}>{profile.role}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1A1E24",
            paddingTop: 26,
            fontSize: 21,
            color: "#7A828D",
          }}
        >
          <span>Python · FastAPI · LangGraph · RAG</span>
          <span>3 live demos, logins included</span>
        </div>
      </div>
    ),
    size,
  );
}
