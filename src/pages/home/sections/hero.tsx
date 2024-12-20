function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex w-full flex-col items-center justify-between gap-4 md:flex-row"
    >
      <div className="flex w-full flex-col items-center gap-4 sm:items-start md:w-1/3">
        {/* Hero text */}
        <h1 className="text-2xl font-bold">Simplify fitness assessment</h1>
        <p className="">
          Get accurate and reliable results quickly, and save time and
          resources.
        </p>

        <a
          href="/Prototype-You-Be-Fitness-Calculator-Editors-Version-2.xlsx"
          target="_blank"
          download="Prototype-You-Be-Fitness-Calculator-Editors-Version-2.xlsx"
        >
          <button className="btn w-fit">Download assessment tool</button>
        </a>
      </div>
      {/* Hero illustration */}
      <img
        src="/hero.svg"
        alt=""
        className="h-full w-full max-w-[500px] rounded-lg border p-4"
      />
    </section>
  );
}

export default Hero;
