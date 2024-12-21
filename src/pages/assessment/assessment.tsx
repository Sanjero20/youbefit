function Assessment() {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <section className="card card-bordered w-full shadow">
          <div className="card-body">
            <h2 className="card-title">⚖️ Body Mass Index (BMI)</h2>
            <p>
              A general guideline to help you understand if your weight falls
              within a healthy range.
            </p>
          </div>
        </section>

        <section className="card card-bordered w-full shadow">
          <div className="card-body">
            <h2 className="card-title">💪 Strength Test</h2>
            <p>
              Assess your muscular strength and endurance through a combination
              of upper and lower body exercises.
            </p>
          </div>
        </section>

        <section className="card card-bordered w-full shadow">
          <div className="card-body">
            <h2 className="card-title">🤸‍♂️ Flexibility Test</h2>
            <p>Assess your range of motion in different parts of your body</p>
          </div>
        </section>

        <section className="card card-bordered w-full shadow">
          <div className="card-body">
            <h2 className="card-title">❤️ Cardiovascular Test</h2>
            <p>
              Assess your heart rate and how well your body can deliver oxygen
              to muscles during physical activity.
            </p>
          </div>
        </section>
      </div>

      <button className="btn mx-auto">Start Assessment</button>
    </div>
  );
}

export default Assessment;
