import { illustrations } from "../data/illustrations";

function AssessmentTools() {
  return (
    <section id="tools" className="flex flex-wrap gap-4 bg-gray-100 pb-6 pt-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2">
        <h2 className="text-center text-xl font-bold">Assessment Tools!</h2>
      </div>

      <div className="container mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {illustrations.map(({ src, name }, index) => (
          <div key={index} className="card w-full bg-white">
            <div className="card-body flex flex-col items-center justify-center gap-2">
              <img src={src} alt="" className="h-48" />
              <h2 className="card-title text-center">{name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AssessmentTools;
