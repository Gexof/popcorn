const average = (arr) =>
  arr.length ? arr.reduce((acc, cur) => acc + cur, 0) / arr.length : 0;

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const stats = [
    { label: "Movies watched", value: watched.length, icon: "🎬" },
    { label: "IMDb rating", value: avgImdbRating.toFixed(1), icon: "⭐" },
    { label: "Your rating", value: avgUserRating.toFixed(1), icon: "🌟" },
    {
      label: "Avg. runtime",
      value: `${Math.round(avgRuntime)} min`,
      icon: "⏱️",
    },
  ];

  return (
    <section className="mb-4 rounded-xl border border-zinc-200 bg-zinc-100/80 p-3.5 dark:border-zinc-800 dark:bg-zinc-800/50 sm:mb-5 sm:rounded-2xl sm:p-4">
      <div className="mb-4 pr-8">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400 sm:text-xs">
          Your collection
        </p>

        <h2 className="text-base font-bold text-zinc-900 dark:text-white sm:text-lg">
          Movies you watched
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="min-w-0 rounded-lg border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-700/70 dark:bg-zinc-900/70 sm:rounded-xl sm:p-3"
          >
            <span
              className="mb-2 block text-lg sm:text-xl"
              role="img"
              aria-label={stat.label}
            >
              {stat.icon}
            </span>

            <p className="wrap-break-word text-base font-extrabold tabular-nums text-zinc-900 dark:text-white sm:text-lg">
              {stat.value}
            </p>

            <p className="mt-1 text-[11px] leading-4 text-zinc-500 dark:text-zinc-400 sm:text-xs sm:leading-5">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WatchedSummary;
