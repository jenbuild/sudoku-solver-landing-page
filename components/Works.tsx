const Works = () => {
  return (
    <section className=" px-4 sm:px-12 lg:px-24 xl:px-48 py-28 text-center">
      <h2 className="text-5xl font-bold">Solve in 3 Simple Steps</h2>

      <div className="mx-auto mt-20 grid max-w-5xl md:grid-cols-3 gap-12">
        <div>
          <img src="/step-1.png" className="glass mx-auto h-24 w-24 rounded-3xl" />
          <div className="mt-6">1</div>
          <h3 className=" font-semibold">Add Extension</h3>
          <div className="">Install Sudoku Solver from Chrome Web Store</div>
        </div>

        <div>
          <img src="/step-2.png" className="glass mx-auto h-24 w-24 rounded-3xl" />
          <div className="mt-6">2</div>
          <h3 className=" font-semibold">Open Puzzle</h3>
          <div className="">Go to NYTimes Sudoku or LinkedIn Mini Sudoku.</div>
        </div>

        <div>
          <img src="/step-3.png" className="glass mx-auto h-24 w-24 rounded-3xl" />
          <div className="mt-6">3</div>
          <h3 className=" font-semibold">Click Solve</h3>
          <div className="">
            Hit the Solve button and watch it complete instantly.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
