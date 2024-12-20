//

import Hero from "./sections/hero";
import ResearchInfo from "./sections/research-info";
import AssessmentTools from "./sections/assessment-tools";
import About from "./sections/about";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ResearchInfo />
      <AssessmentTools />
      <About />
    </div>
  );
}

export default Home;
