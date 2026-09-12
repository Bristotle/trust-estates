"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Card with a cursor-following gold glow on hover. */
export function SpotlightCard({ className, children, as: Tag = "div", ...rest }: React.HTMLAttributes<HTMLElement> & { as?: "div" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999, on: false });
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      className={cn("relative overflow-hidden", className)}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: pos.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(212,175,55,0.16), transparent 60%)`,
        }}
      />
      {children}
    </Tag>
  );
}
