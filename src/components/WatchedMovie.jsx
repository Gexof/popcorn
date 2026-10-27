function WatchedMovie({ movie }) {
  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <li className="group flex min-w-0 gap-3 py-3.5 first:pt-0 last:pb-0 sm:gap-4 sm:py-4">
      <div className="h-24 w-[68px] shrink-0 overflow-hidden rounded-lg bg-zinc-100 shadow-sm ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 sm:h-28 sm:w-[76px] lg:h-32 lg:w-[86px]">
        {hasPoster ? (
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1 text-zinc-500 dark:text-zinc-400">
            <span className="text-xl" role="img" aria-label="no poster">
              🎬
            </span>
            <span className="text-[9px]">No poster</span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5">
        <h3 className="line-clamp-2 break-words text-sm font-bold leading-snug text-zinc-900 dark:text-zinc-100 sm:text-base">
          {movie.Title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400 sm:gap-x-4 sm:text-sm">
          <p className="flex items-center gap-1.5">
            <span aria-hidden="true">⭐</span>
            <span>{movie.imdbRating}</span>
          </p>

          <p className="flex items-center gap-1.5">
            <span aria-hidden="true">🌟</span>
            <span>{movie.userRating}</span>
          </p>

          <p className="flex items-center gap-1.5">
            <span aria-hidden="true">⏱️</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default WatchedMovie;
