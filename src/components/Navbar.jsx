import Search from "./Search";

function Navbar({ movies, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 px-4 py-4 backdrop-blur-xl transition-colors dark:border-zinc-800 dark:bg-zinc-950/90 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-2xl shadow-lg shadow-amber-400/20">
            <span role="img" aria-label="popcorn">
              🍿
            </span>
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
              Popcorn<span className="text-amber-500">.</span>
            </h1>

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Your movie universe
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="order-3 w-full md:order-2 md:max-w-xl md:flex-1 md:px-8">
          <Search />
        </div>

        {/* Actions */}
        <div className="order-2 flex shrink-0 items-center gap-3 md:order-3">
          {/* Results */}
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100/80 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-amber-400" />

            <p className="whitespace-nowrap text-xs font-medium text-zinc-600 dark:text-zinc-400 sm:text-sm">
              Found{" "}
              <strong className="font-bold text-zinc-950 dark:text-white">
                {movies.length}
              </strong>{" "}
              results
            </p>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-amber-300 dark:hover:border-amber-400 dark:hover:bg-zinc-800"
          >
            {isDark ? (
              /* Sun icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
