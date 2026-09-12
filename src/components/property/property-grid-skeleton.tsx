/** Server-rendered placeholder matching PropertyGrid's layout so the page does not shift when the grid hydrates. */
export function PropertyGridSkeleton({ cards = 6, withTypeToggle = true }: { cards?: number; withTypeToggle?: boolean }) {
  return (
    <div aria-hidden>
      <div className="sticky top-[72px] z-30 -mx-5 border-b border-forest-900/10 bg-cream-100/90 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          {withTypeToggle && <div className="h-10 w-72 rounded-full bg-forest-900/8" />}
          <div className="h-10 w-32 rounded-full bg-forest-900/8" />
          <div className="h-10 w-32 rounded-full bg-forest-900/8" />
          <div className="h-10 w-44 rounded-full bg-forest-900/8" />
        </div>
      </div>
      <div className="mt-8 h-5 w-40 rounded bg-forest-900/8" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: cards }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl bg-white ring-1 ring-forest-900/8">
            <div className="aspect-[4/3] animate-pulse bg-forest-900/8" />
            <div className="space-y-3 p-5">
              <div className="h-5 w-3/4 rounded bg-forest-900/8" />
              <div className="h-4 w-1/2 rounded bg-forest-900/8" />
              <div className="mt-4 h-px bg-forest-900/8" />
              <div className="h-4 w-full rounded bg-forest-900/8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
