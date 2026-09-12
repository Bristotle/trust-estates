import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, background: "#0b3b2c", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="120" height="120" viewBox="0 0 40 40" fill="none">
          <path d="M6 22 20 9l14 13" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 20v12h18V20" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" />
          <rect x="17" y="24" width="6" height="8" fill="#d4af37" />
          <path d="M26 12V8h4v8" stroke="#d4af37" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
