import Window from "./Window";

export default function Hero() {
  return (
    <section className="relative  px-4 sm:px-12 lg:px-24 xl:px-48 py-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 py-4 lg:grid-cols-2">
        <div>
          <h1 className="text-6xl font-bold leading-[1.05] lg:text-8xl">
            Solve Sudoku.
            <br />
            <span className="bg-gradient-to-r from-violet-500 to-sky-400 bg-clip-text text-transparent">
              In One Click.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-xl text-slate-600">
            Instantly solve any Sudoku puzzle on NYTimes and LinkedIn
            Mini-Sudoku. Save time.
          </p>

          {/* <div className="mt-10 flex gap-5">
            <button className="liquid-button px-8 py-4">Add to Chrome</button>

            <button className="flex items-center gap-2">
              See it in action
            </button>
          </div> */}
        </div>

        {/* Sudoku Mockup will add later */}
        <div className="">
          <Window />
        </div>
      </div>
    </section>
  );
}
