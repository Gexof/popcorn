function Movie({ movie }) {
  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <li className="group flex min-w-0 gap-3 py-3.5 first:pt-0 last:pb-0 sm:gap-4 sm:py-4">
      <div className="h-24 w-17 shrink-0 overflow-hidden rounded-lg bg-zinc-100 shadow-sm ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 sm:h-28 sm:w-19 lg:h-32 lg:w-21.5">
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

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
        <h3 className="line-clamp-2 wrap-break-word text-sm font-bold leading-snug text-zinc-900 transition-colors group-hover:text-amber-600 dark:text-zinc-100 dark:group-hover:text-amber-400 sm:text-base">
          {movie.Title}
        </h3>

        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
          </svg>

          <span>{movie.Year}</span>
        </div>
      </div>
    </li>
  );
}

export default Movie;
