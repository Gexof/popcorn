import { useEffect, useState } from "react";
import MovieDetailsSkeleton from "./MovieDetailsSkeleton";
import StarRating from "./StarRating";
import { X } from "lucide-react";

function MovieDetails({
  selectedId,
  KEY,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

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

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Rated: rated,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

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
          src={poster}
          alt={`${title} poster`}
          className="h-40 w-28 shrink-0 rounded-xl object-cover shadow-lg"
        />

        <div className="flex min-w-0 flex-col justify-center gap-2">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {year} · {runtime}
          </p>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">{genre}</p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
              ⭐ {imdbRating}
            </span>

            <span className="rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {rated}
            </span>
          </div>
        </div>
      </div>

      {/* User Rating */}
      <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800/60">
        {!isWatched ? (
          <>
            <p className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              Rate this movie
            </p>

            <StarRating maxRating={10} onSetRating={setUserRating} />

            {userRating > 0 && (
              <button
                onClick={handleAdd}
                className="mt-4 w-full rounded-xl bg-popcorn px-4 py-3 text-sm font-bold text-zinc-900 shadow-sm transition hover:bg-popcorn-dark hover:shadow-md active:scale-[0.98]"
              >
                Add to List
              </button>
            )}
          </>
        ) : (
          <p>You Rated this movie {watchedUserRating}</p>
        )}
      </div>

      {/* Plot */}
      <div>
        <h3 className="mb-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
          Overview
        </h3>

        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {plot}
        </p>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="mb-1 text-xs font-semibold uppercase text-zinc-400">
            Director
          </h4>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{director}</p>
        </div>

        <div>
          <h4 className="mb-1 text-xs font-semibold uppercase text-zinc-400">
            Released
          </h4>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{released}</p>
        </div>

        <div className="col-span-2">
          <h4 className="mb-1 text-xs font-semibold uppercase text-zinc-400">
            Cast
          </h4>
          <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            {actors}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
