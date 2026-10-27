import Movie from "./Movie";

function MovieList({ movies }) {
  if (!movies?.length) {
    return (
      <div className="flex min-h-60 flex-col items-center justify-center gap-3 px-4 text-center">
        <span className="text-4xl" role="img" aria-label="movie">
          🎬
        </span>

        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          No movies found
        </h3>

        <p className="max-w-xs text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Try searching for another movie to discover something new.
        </p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
