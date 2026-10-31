import { useEffect, useState } from "react";
import MovieDetailsSkeleton from "./MovieDetailsSkeleton";
import StarRating from "./StarRating";
import { X } from "lucide-react";

function MovieDetails({ selectedId, KEY, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
        );

        const data = await res.json();

        console.log(data);

        setMovie(data);
        setIsLoading(false);
      }

      getMovieDetails();
    },
    [selectedId, KEY],
  );

  function handleSetRating(rating) {
    console.log("User Rating:", rating);
  }

  if (isLoading) return <MovieDetailsSkeleton />;

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={onCloseMovie}
        className="flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
      >
        <X size={18} />
      </button>

      {/* Movie Header */}
      <div className="flex gap-4">
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          className="h-40 w-28 shrink-0 rounded-xl object-cover shadow-lg"
        />

        <div className="flex min-w-0 flex-col justify-center gap-2">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {movie.Title}
          </h2>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {movie.Year} · {movie.Runtime}
          </p>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {movie.Genre}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
              ⭐ {movie.imdbRating}
            </span>

            <span className="rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {movie.Rated}
            </span>
          </div>
        </div>
      </div>

      {/* User Rating */}
      <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800/60">
        <p className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Rate this movie
        </p>

        <StarRating maxRating={10} onSetRating={handleSetRating} />
      </div>

      {/* Plot */}
      <div>
        <h3 className="mb-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
          Overview
        </h3>

        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {movie.Plot}
        </p>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="mb-1 text-xs font-semibold uppercase text-zinc-400">
            Director
          </h4>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {movie.Director}
          </p>
        </div>

        <div>
          <h4 className="mb-1 text-xs font-semibold uppercase text-zinc-400">
            Released
          </h4>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {movie.Released}
          </p>
        </div>

        <div className="col-span-2">
          <h4 className="mb-1 text-xs font-semibold uppercase text-zinc-400">
            Cast
          </h4>
          <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            {movie.Actors}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
