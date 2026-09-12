import Image from "next/image";
import { Container } from "./container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  image?: string;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-forest-950 text-white grain", compact ? "pb-14 pt-36" : "pb-20 pt-40 lg:pb-28 lg:pt-48")}>
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/70 to-forest-950" />
        </>
      )}
      <Container className="relative">
        <p className="eyebrow flex items-center gap-3 text-gold-400">
          <span className="h-px w-8 bg-gold-400" /> {eyebrow}
        </p>
        <h1 className="serif-display mt-5 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        {body && <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">{body}</p>}
        {children}
      </Container>
    </section>
  );
}
