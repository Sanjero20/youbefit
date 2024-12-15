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
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
      </header>

      {/* Hero section */}
      <section className="container mx-auto w-full items-center justify-between gap-4 py-8 sm:flex">
        <div className="flex flex-col gap-4 sm:w-1/3">
          {/* Hero text */}
          <h1 className="text-2xl font-bold">
            Simplify Talent Assessment. Maximize Results.
          </h1>
          <p className="">
            Streamline your hiring and development processes with our
            easy-to-use assessment platform. Get accurate and reliable results
            quickly, and save time and resources.
          </p>
          <button className="btn">Explore Our Solutions</button>
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
          <h2 className="text-lg font-bold">Significance of this study</h2>

          <ul className="flex flex-1 flex-wrap gap-4 gap-x-4">
            <li className="">
              <div className="card w-96 border">
                <div className="card-body">
                  <h2 className="card-title">Skibidi Rizz Toilet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora, reprehenderit nam eos sint unde, quas porro
                    molestias dignissimos fuga iure, debitis praesentium sit
                    corporis odit veritatis quo. Fugit, beatae consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="">
              <div className="card w-96 border">
                <div className="card-body">
                  <h2 className="card-title">Skibidi Rizz Toilet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora, reprehenderit nam eos sint unde, quas porro
                    molestias dignissimos fuga iure, debitis praesentium sit
                    corporis odit veritatis quo. Fugit, beatae consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 border">
                <div className="card-body">
                  <h2 className="card-title">Skibidi Rizz Toilet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora, reprehenderit nam eos sint unde, quas porro
                    molestias dignissimos fuga iure, debitis praesentium sit
                    corporis odit veritatis quo. Fugit, beatae consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 border">
                <div className="card-body">
                  <h2 className="card-title">Skibidi Rizz Toilet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora, reprehenderit nam eos sint unde, quas porro
                    molestias dignissimos fuga iure, debitis praesentium sit
                    corporis odit veritatis quo. Fugit, beatae consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 border">
                <div className="card-body">
                  <h2 className="card-title">Skibidi Rizz Toilet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora, reprehenderit nam eos sint unde, quas porro
                    molestias dignissimos fuga iure, debitis praesentium sit
                    corporis odit veritatis quo. Fugit, beatae consectetur!
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="card w-96 border">
                <div className="card-body">
                  <h2 className="card-title">Skibidi Rizz Toilet</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora, reprehenderit nam eos sint unde, quas porro
                    molestias dignissimos fuga iure, debitis praesentium sit
                    corporis odit veritatis quo. Fugit, beatae consectetur!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Download */}
      <section className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center text-xl font-bold">Assessment Tools!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <button className="btn">Download tool</button>
        </div>
      </section>

      {/*  */}
      <section className="container mx-auto flex flex-col gap-4">
        <div className="mx-auto flex w-full max-w-[1000px] justify-between gap-4">
          <ul>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>

          <img src="/logo.webp" alt="" className="w-64 rounded-lg" />
        </div>

        <div className="mx-auto flex w-full max-w-[1000px] justify-between gap-4">
          <img src="/logo.webp" alt="" className="w-64 rounded-lg" />
          <ul>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
        </div>
      </section>

      {/*  */}
      <section className="flex h-[40vh] items-center justify-center bg-black">
        <div className="h-48 w-full max-w-[800px] bg-white">
          {/*  */}
          {/*  */}
        </div>
      </section>

      {/*  */}
      <section className="container mx-auto py-8">
        <h2 className="card-title">About Us</h2>
        <hr />
      </section>
    </div>
  );
}

export default App;
