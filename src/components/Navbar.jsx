import Search from "./Search";

function Navbar({ movies }) {
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
              Popcorn
              <span className="text-amber-500">.</span>
            </h1>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Your movie universe
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="order-3 w-full md:order-2 md:w-auto md:flex-1 md:max-w-xl md:px-8">
          <Search />
        </div>

        {/* Results Count */}
        <div className="order-2 flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100/80 px-3.5 py-2 dark:border-zinc-800 dark:bg-zinc-900 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-amber-400" />

          <p className="whitespace-nowrap text-xs font-medium text-zinc-600 dark:text-zinc-400 sm:text-sm">
            Found{" "}
            <strong className="font-bold text-zinc-950 dark:text-white">
              {movies.length}
            </strong>{" "}
            results
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
