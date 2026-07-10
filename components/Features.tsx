type FeaturesList = {
  title: string;
  desc: string;
};

const items: FeaturesList[] = [
  {
    title: "One Click Solve",
    desc: "Click solve and instantly complete the puzzle.",
  },
  {
    title: "Works Where You Play",
    desc: "Supports NYTimes and LinkedIn Sudoku.",
  },
  {
    title: "Safe & Private",
    desc: "No data collection. Ever.",
  },
];

const Features = () => {
  return (
    <section className=" px-4 sm:px-12 lg:px-24 xl:px-48 py-32">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Powerful. Simple. Effortless.</h2>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {items.map((item) => {
          return (
            <div key={item.title} className="glass card-shadow rounded-3xl p-8">
              <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-slate-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
