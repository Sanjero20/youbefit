import { useState } from "react";
import AssessmentIntro from "./sections/introduction";

function Assessment() {
  const [start, setStart] = useState(false);

  const startAssessment = () => {
    setStart(true);
  };

  const resetAssessment = () => {
    setStart(false);
  };

  return (
    <div className="container mx-auto flex flex-col gap-4">
      {!start && (
        <>
          <AssessmentIntro />
          <button className="btn mx-auto" onClick={startAssessment}>
            Start Assessment
          </button>
        </>
      )}

      {start && (
        <>
          <button className="btn mx-auto" onClick={resetAssessment}>
            Reset Assessment
          </button>
        </>
      )}
    </div>
  );
}

export default Assessment;
