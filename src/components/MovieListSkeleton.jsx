function MovieListSkeleton() {
  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {Array.from({ length: 5 }).map((_, index) => (
        <li
          key={index}
          className="flex min-w-0 animate-pulse gap-3 py-3.5 first:pt-0 last:pb-0 sm:gap-4 sm:py-4"
        >
          {/* Poster Skeleton */}
          <div className="h-24 w-17 shrink-0 rounded-lg bg-zinc-200 dark:bg-zinc-800 sm:h-28 sm:w-19 lg:h-32 lg:w-21.5" />

          {/* Movie Info Skeleton */}
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
            {/* Title */}
            <div className="h-4 w-3/4 rounded-md bg-zinc-200 dark:bg-zinc-800 sm:h-5" />

            {/* Second title line */}
            <div className="h-4 w-1/2 rounded-md bg-zinc-200 dark:bg-zinc-800 sm:h-5" />

            {/* Year */}
            <div className="h-3 w-16 rounded-md bg-zinc-200 dark:bg-zinc-800 sm:h-4" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieListSkeleton;
