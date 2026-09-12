import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Check, FileText, MapPin, Ruler } from "lucide-react";
import { getProperty, properties, typeLabel } from "@/data/properties";
import { Container } from "@/components/ui/container";
import { Gallery } from "@/components/property/gallery";
import { EnquiryCard } from "@/components/property/enquiry-card";
import { PropertyCard } from "@/components/property/property-card";
import { Reveal } from "@/components/ui/reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProperty((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, openGraph: { images: [p.images[0]] } };
}

export default async function PropertyPage({ params }: Params) {
  const p = getProperty((await params).slug);
  if (!p) notFound();
  const similar = properties.filter((x) => x.slug !== p.slug && (x.type === p.type || x.region === p.region)).slice(0, 3);
  const mapUrl = `https://www.google.com/maps?q=${p.coords.lat},${p.coords.lng}&z=13&output=embed`;

  return (
    <>
      <section className="bg-cream-100 pb-24 pt-28">
        <Container>
          <Link href="/properties" className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-forest-900">
            <ArrowLeft className="size-4" /> All properties
          </Link>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-forest-900 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">{typeLabel[p.type]}</span>
                <span className="flex items-center gap-1 rounded-full bg-gold-400/20 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold-600">
                  <BadgeCheck className="size-3.5" /> {p.titleStatus}
                </span>
                {p.roi && <span className="rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold text-forest-950">{p.roi}</span>}
              </div>
              <h1 className="serif-display mt-4 text-4xl text-forest-950 sm:text-5xl lg:text-6xl">{p.title}</h1>
              <p className="mt-3 flex items-center gap-2 text-ink-muted">
                <MapPin className="size-4 text-gold-600" /> {p.location} · {p.region} Region
                <span className="mx-1 text-forest-900/20">|</span>
                <Ruler className="size-4 text-gold-600" /> {p.size}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
            <div className="space-y-14">
              <Gallery images={p.images} title={p.title} />

              <Reveal>
                <p className="eyebrow text-gold-600">Overview</p>
                <p className="mt-4 text-lg leading-relaxed text-forest-950">{p.summary}</p>
                <p className="mt-4 leading-relaxed text-ink-muted">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-full border border-forest-900/15 px-3 py-1 text-xs font-medium text-forest-900">{t}</span>)}
                </div>
              </Reveal>

              <Reveal className="grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-gold-600">Highlights</p>
                  <ul className="mt-4 space-y-3">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-forest-950">
                        <Check className="mt-0.5 size-4 shrink-0 text-forest-700" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-gold-600">Documents available</p>
                  <ul className="mt-4 space-y-3">
                    {p.documents.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-forest-950">
                        <FileText className="mt-0.5 size-4 shrink-0 text-gold-600" /> {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-ink-muted">Copies shared on request before any payment.</p>
                </div>
              </Reveal>

              <Reveal>
                <p className="eyebrow text-gold-600">Location</p>
                <div className="relative mt-4 h-[360px] overflow-hidden rounded-3xl bg-forest-900 ring-1 ring-forest-900/10 grain">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                    <MapPin className="size-8 text-gold-400" />
                    <p className="font-semibold">{p.location}</p>
                    <a href={`https://www.google.com/maps?q=${p.coords.lat},${p.coords.lng}`} target="_blank" rel="noreferrer" className="text-sm text-gold-300 underline underline-offset-4">Open in Google Maps</a>
                  </div>
                  <iframe title="Map" src={mapUrl} className="relative h-full w-full grayscale-[30%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </Reveal>
            </div>

            <div>
              <EnquiryCard p={p} />
            </div>
          </div>
        </Container>
      </section>

      {similar.length > 0 && (
        <section className="bg-cream-200 py-20">
          <Container>
            <h2 className="serif-display text-4xl text-forest-950">Similar opportunities</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((s, i) => <PropertyCard key={s.slug} p={s} index={i} />)}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
