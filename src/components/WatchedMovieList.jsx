import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched }) {
  if (!watched.length) {
    return (
      <div className="flex min-h-48 flex-col items-center justify-center gap-3 px-4 text-center">
        <span className="text-4xl" role="img" aria-label="empty collection">
          🍿
        </span>

        <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
          Your collection is empty
        </h3>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Movies you watch will show up here.
        </p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
