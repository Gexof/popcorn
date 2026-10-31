import { useEffect, useState } from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import MovieListSkeleton from "./components/MovieListSkeleton";
import ErrorMsg from "./components/ErrorMsg";
import MovieDetails from "./components/MovieDetails";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("popcorn-theme");

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const KEY = "5ff960f7";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const [theme, setTheme] = useState(getInitialTheme);

  // Toggle Theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("popcorn-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  // ** Handlers

  const handleSelectMovie = (id) => {
    setSelectedId((prev) => (id === prev ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((prev) => [...prev, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  // Fetching Data
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        console.log(data);

        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.trim().length < 3) {
      setMovies([]);
      setError("");
      setIsLoading(false);
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar
        movies={movies}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        query={query}
        setQuery={setQuery}
      />

      <Main>
        {/* {isLoading ? <MovieListSkeleton /> : <MovieList movies={movies} />} */}
        <Box>
          {isLoading && <MovieListSkeleton />}
          {!isLoading && error && <ErrorMsg message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              KEY={KEY}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
