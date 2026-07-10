export default function Banner() {
  return (
    <section className="px-4 sm:px-12 lg:px-24 xl:px-48 pt-4 pb-24">
      <div className="glass flex flex-col md:flex-row gap-3 items-center justify-between rounded-[40px] p-10">
        <div>
          <h3 className="text-3xl font-bold">Ready to Solve Smarter?</h3>

          <p className="mt-2 text-slate-600">
            Join thousands of Sudoku players.
          </p>
        </div>

        <button className="liquid-button px-8 py-4">Add to Chrome</button>
      </div>
    </section>
  );
}
