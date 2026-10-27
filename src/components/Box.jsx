import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="relative min-w-0 rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl">
      <button
        type="button"
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-lg font-medium text-zinc-600 transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:bg-zinc-700 sm:right-4 sm:top-4"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Collapse section" : "Expand section"}
        aria-expanded={isOpen}
      >
        {isOpen ? "−" : "+"}
      </button>

      {isOpen && <div className="min-w-0 p-3 sm:p-5 lg:p-6">{children}</div>}
    </section>
  );
}

export default Box;
