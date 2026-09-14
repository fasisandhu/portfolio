import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The card is the first impression for a pasted link, so it ships the real face
 *  rather than falling back to whatever Satori bundles. */
async function font(file: string) {
  return readFile(path.join(process.cwd(), "assets", file));
}

export default async function OpengraphImage() {
  const [regular, expanded] = await Promise.all([
    font("Archivo-Regular.ttf"),
    font("Archivo-ExpandedBold.ttf"),
  ]);

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
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#FFB020",
            }}
          >
            {profile.badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 14px",
              fontFamily: "ArchivoExpanded",
              fontSize: 46,
              fontWeight: 700,
              letterSpacing: -1.4,
              lineHeight: 1.1,
              maxWidth: 1020,
            }}
          >
            <span style={{ color: "#8B939E" }}>{profile.taglineLead}</span>
            <span>{profile.taglineClaim}</span>
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
    {
      ...size,
      fonts: [
        { name: "Archivo", data: regular, weight: 400, style: "normal" },
        { name: "ArchivoExpanded", data: expanded, weight: 700, style: "normal" },
      ],
    },
  );
}
