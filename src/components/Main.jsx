function Main({ children }) {
  return (
    <main className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-4 px-3 py-5 transition-colors duration-300 sm:gap-5 sm:px-5 sm:py-7 lg:grid-cols-2 lg:gap-6 lg:px-6 lg:py-8">
      {children}
    </main>
  );
}

export default Main;
