import { useState } from "react";

import AssessmentIntro from "./sections/introduction";
import AssessmentForm from "./components/forms";

function Assessment() {
  const [start, setStart] = useState(true);

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
        <div className="mx-auto flex w-full max-w-[600px] flex-col gap-2">
          <AssessmentForm />
          <button
            className="btn btn-error mx-auto w-full bg-error text-white"
            onClick={resetAssessment}
          >
            Reset Assessment
          </button>
        </div>
      )}
    </div>
  );
}

export default Assessment;
