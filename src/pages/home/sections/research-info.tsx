import Card from "@/components/ui/card";
import { significances } from "../data/significance";

function ResearchInfo() {
  return (
    <section className="container mx-auto flex flex-col gap-4 py-4">
      {/* Introduction */}
      <div>
        <h2 className="text-lg font-bold">Introduction</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          neque eveniet enim, iure voluptatem ut dicta recusandae repudiandae!
          Atque cupiditate itaque necessitatibus totam ab eum officiis,
          inventore iure! Exercitationem, aliquid!
        </p>
      </div>

      {/* Research Description */}
      <div>
        <h2 className="text-lg font-bold">Research Description</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          neque eveniet enim, iure voluptatem ut dicta recusandae repudiandae!
          Atque cupiditate itaque necessitatibus totam ab eum officiis,
          inventore iure! Exercitationem, aliquid!
        </p>
      </div>

      {/* Significance of the study */}
      <div>
        <h2 className="pb-4 text-center text-lg font-bold">Significance</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {significances.map((data, index) => (
            <li key={index}>
              <Card title={data.title} description={data.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ResearchInfo;
