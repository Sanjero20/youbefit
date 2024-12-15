import Card from "./components/ui/card";
import { significances } from "./data/significance";

function App() {
  return (
    <div data-theme="light" className="flex min-h-screen flex-col gap-8">
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="card-title">
          <img src="/logo.webp" alt="" className="h-12 rounded-full" />
          You be fit
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tools">Tools</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero section */}
      <section
        id="home"
        className="container mx-auto w-full items-center justify-between gap-4 py-4 sm:flex"
      >
        <div className="flex flex-col gap-4 sm:w-1/3">
          {/* Hero text */}
          <h1 className="text-2xl font-bold">Simplify fitness assessment</h1>
          <p className="">
            Get accurate and reliable results quickly, and save time and
            resources.
          </p>

          <a
            href="./assets/Prototype-You-Be-Fitness-Calculator-Editors-Version-2.xlsx"
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
          className="h-[500px] rounded-lg border p-4"
        />
      </section>

      {/* Research Details */}
      <section className="container mx-auto flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-bold">Introduction</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            neque eveniet enim, iure voluptatem ut dicta recusandae repudiandae!
            Atque cupiditate itaque necessitatibus totam ab eum officiis,
            inventore iure! Exercitationem, aliquid!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Research Description</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            neque eveniet enim, iure voluptatem ut dicta recusandae repudiandae!
            Atque cupiditate itaque necessitatibus totam ab eum officiis,
            inventore iure! Exercitationem, aliquid!
          </p>
        </div>

        <div>
          <h2 className="pb-4 text-center text-lg font-bold">Significance</h2>
          <ul className="flex flex-1 flex-wrap justify-center gap-4 gap-x-4">
            {significances.map((data, index) => (
              <li key={index}>
                <Card title={data.title} description={data.description} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Download */}
      <section id="tools" className="flex flex-col gap-4 bg-gray-100 py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2">
          <h2 className="text-center text-xl font-bold">Assessment Tools!</h2>
        </div>

        <div className="container mx-auto grid grid-cols-4 gap-4">
          <div className="card border bg-white">
            <div className="card-body flex flex-col items-center justify-center gap-2">
              <img src="/illustrations/bmi.svg" alt="" className="h-48" />
              <h2 className="card-title text-center">Body Mass Index (BMI)</h2>
            </div>
          </div>

          <div className="card border bg-white">
            <div className="card-body flex flex-col items-center justify-center gap-2">
              <img
                src="/illustrations/strength.svg"
                alt=""
                className="h-48 w-full"
              />

              <h2 className="card-title text-center">Strength Test</h2>
            </div>
          </div>

          <div className="card border bg-white">
            <div className="card-body flex w-full flex-col items-center justify-center gap-2 text-center">
              <img
                src="/illustrations/flexibility.svg"
                alt=""
                className="h-48"
              />
              <h2 className="card-title">Flexibility Test</h2>
            </div>
          </div>

          <div className="card border bg-white">
            <div className="card-body flex w-full flex-col items-center justify-center">
              <img src="/illustrations/cardio.svg" alt="" className="h-48" />
              <h2 className="card-title">Cardio Endurance Test</h2>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section
        id="about"
        className="container mx-auto flex flex-col gap-2 py-4"
      >
        <h2 className="card-title">About Us</h2>
        <hr />

        <div className="flex gap-4">
          <img src="/logo.webp" alt="" className="w-64 rounded-lg" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            excepturi ut obcaecati minima, pariatur amet, tempora dolorum alias
            culpa quis incidunt ipsa nam deleniti earum architecto illum
            repellendus harum laborum?
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
