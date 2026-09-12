import { ImageResponse } from "next/og";

export const alt = "Estates Trust: verified lands, buildings and investments in Ghana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadSerif() {
  try {
    const css = await fetch("https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0" },
    }).then((r) => r.text());
    const url = css.match(/src: url\(([^)]+)\) format\('(?:truetype|woff)'\)/)?.[1];
    if (!url) return undefined;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return undefined;
  }
}

export default async function OgImage() {
  const serif = await loadSerif();
  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #06221a 0%, #0f4a37 100%)", color: "#fff", fontFamily: serif ? "Instrument Serif" : "Georgia, serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 40 40" fill="none">
            <path d="M6 22 20 9l14 13" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 20v12h18V20" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="17" y="24" width="6" height="8" fill="#d4af37" />
            <path d="M26 12V8h4v8" stroke="#d4af37" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
          <div style={{ display: "flex", fontSize: 40 }}>
            <span>Estates</span><span style={{ color: "#d4af37", fontStyle: "italic", marginLeft: 12 }}>Trust</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, display: "flex", flexDirection: "column" }}>
            <span>Real estate you can</span>
            <span style={{ color: "#d4af37", fontStyle: "italic" }}>trust.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.75)", fontFamily: "Helvetica, Arial, sans-serif" }}>
            Verified lands, buildings and investments across Ghana, Africa and beyond.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: "#d4af37", fontFamily: "Helvetica, Arial, sans-serif" }}>
          <span>Your trust. Our commitment. Your future.</span>
          <span>WhatsApp 0547924015</span>
        </div>
      </div>
    ),
    serif ? { ...size, fonts: [{ name: "Instrument Serif", data: serif, style: "normal" as const, weight: 400 as const }] } : size,
  );
}
