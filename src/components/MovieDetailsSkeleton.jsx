function MovieDetailsSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-5">
      {/* Movie Header */}
      <div className="flex gap-4">
        <div className="h-40 w-28 shrink-0 rounded-xl bg-zinc-200 dark:bg-zinc-800" />

        <div className="flex flex-1 flex-col justify-center gap-3">
          <div className="h-5 w-3/4 rounded-md bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-3 w-1/2 rounded-md bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-3 w-2/3 rounded-md bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex gap-2">
            <div className="h-7 w-16 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-7 w-12 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      </div>

      {/* Plot */}
      <div className="space-y-3">
        <div className="h-4 w-20 rounded-md bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-3 w-full rounded-md bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-3 w-full rounded-md bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-3 w-3/4 rounded-md bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Movie Information */}
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-3 w-20 rounded-md bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-3 w-full rounded-md bg-zinc-200 dark:bg-zinc-800" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetailsSkeleton;
