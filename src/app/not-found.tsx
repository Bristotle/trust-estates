import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-forest-950 text-white grain">
      <div className="mx-auto max-w-xl px-5 text-center">
        <p className="eyebrow text-gold-400">404</p>
        <h1 className="serif-display mt-4 text-5xl">This plot isn&apos;t on our map.</h1>
        <p className="mt-4 text-white/60">The page you&apos;re looking for has moved or never existed.</p>
        <Button href="/properties" variant="gold" className="mt-8">Browse properties</Button>
      </div>
    </section>
  );
}
