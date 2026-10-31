function ErrorMsg({ message }) {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center gap-3 px-4 text-center">
      <span className="text-4xl" role="img" aria-label="error">
        ⚠️
      </span>

      <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        Something went wrong
      </h3>

      <p className="max-w-xs text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {message}
      </p>
    </div>
  );
}

export default ErrorMsg;
