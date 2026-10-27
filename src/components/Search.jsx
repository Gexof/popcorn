import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="group relative w-full">
      {/* Search Icon */}
      <svg
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-amber-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m16 16 4 4" />
      </svg>

      {/* Search Input */}
      <input
        className="w-full rounded-2xl border border-zinc-200 bg-zinc-100/80 py-3 pl-12 pr-4 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 hover:border-zinc-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-700 dark:focus:border-amber-400 dark:focus:bg-zinc-900"
        type="text"
        placeholder="Search movies..."
        aria-label="Search movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
