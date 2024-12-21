import { FormEvent, useState } from "react";

type Measurement = "imperial" | "metric";
// type Result = "Malnourish" | "Normal" | "Overweight" | "Obese" | "";

function BmiForm() {
  const [system, setSystem] = useState<Measurement>("imperial");
  // const [result, setResult] = useState<Result>("");

  const calculateBMI = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={calculateBMI} className="flex w-full flex-col gap-2">
      <div>
        <h2 className="card-title">Let's start with your BMI</h2>
        <p>
          Body Mass Index (BMI) is a simple calculation that uses your height
          and weight to estimate your body fat percentage. It provides a general
          guideline to help you understand if your weight falls within a healthy
          range.
        </p>
      </div>

      {/* Measurement Type */}
      <div className="flex w-full justify-between gap-2">
        <div className="form-control w-1/2 rounded-lg border p-2">
          <label className="label cursor-pointer">
            <span className="label-text">Imperial</span>
            <input
              type="radio"
              name="radio-10"
              className="radio"
              checked={system === "imperial"}
              value="imperial"
              onChange={(e) => setSystem(e.target.value as Measurement)}
            />
          </label>
        </div>

        <div className="form-control w-1/2 rounded-lg border p-2">
          <label className="label input-bordered cursor-pointer">
            <span className="label-text">Metric</span>
            <input
              type="radio"
              name="radio-10"
              className="radio"
              value="metric"
              onChange={(e) => setSystem(e.target.value as Measurement)}
              checked={system === "metric"}
            />
          </label>
        </div>
      </div>

      {system === "imperial" && (
        <fieldset className="flex items-center gap-2 rounded-lg border">
          <label className="input flex w-1/2 items-center gap-2">
            Height
            <input type="number" className="grow" placeholder="feet" />
          </label>

          <label className="input flex w-1/2 items-center gap-2">
            <input type="number" className="grow" placeholder="inches" />
          </label>
        </fieldset>
      )}

      {system === "metric" && (
        <label className="input input-bordered flex w-full items-center gap-2">
          Height
          <input type="number" className="grow" placeholder="centimeters" />
        </label>
      )}

      <label className="input input-bordered flex items-center gap-2">
        Weight
        <input
          type="number"
          className="grow"
          placeholder={system === "imperial" ? "pounds" : "kilograms"}
        />
      </label>
    </form>
  );
}

export default BmiForm;
