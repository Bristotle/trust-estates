import type { ImageLoaderProps } from "next/image";

// Unsplash (imgix) resizes at the CDN edge, so we pass the requested width
// straight through instead of routing through the Next.js optimizer.
// Swap back to the default loader once the client's own photos are in /public.
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.includes("images.unsplash.com")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  }
  return src;
}
