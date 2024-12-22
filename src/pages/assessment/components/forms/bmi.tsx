import InfoSection from "@/components/info-section";
import { useFormContext } from ".";

function Bmi() {
  const { state, dispatch } = useFormContext();

  return (
    <div className="flex w-full flex-col gap-2">
      <InfoSection
        title="BMI"
        description="Body Mass Index (BMI) is a simple calculation that uses your height
          and weight to estimate your body fat percentage. It provides a general
          guideline to help you understand if your weight falls within a healthy
          range."
      />

      {/* Measurement Type */}
      <div className="flex w-full justify-between gap-2">
        <div className="form-control w-1/2 rounded-lg border p-2">
          <label className="label cursor-pointer">
            <span className="label-text">Imperial</span>
            <input
              type="radio"
              name="radio-10"
              className="radio"
              value="imperial"
              onChange={(e) =>
                dispatch({
                  type: "user",
                  payload: { key: "measurement", value: e.target.value },
                })
              }
              checked={state.user.measurement === "imperial"}
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
              onChange={(e) =>
                dispatch({
                  type: "user",
                  payload: { key: "measurement", value: e.target.value },
                })
              }
              checked={state.user.measurement === "metric"}
            />
          </label>
        </div>
      </div>

      {state.user.measurement === "imperial" && (
        <label className="input input-bordered flex w-full items-center gap-2">
          Height
          <input
            type="number"
            className="mr-[-3.3rem] w-1/2"
            placeholder="feet"
          />
          <span className="h-full border-r-2" />
          <input type="number" className="w-1/2" placeholder="inches" />
        </label>
      )}

      {state.user.measurement === "metric" && (
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
          placeholder={
            state.user.measurement === "imperial" ? "pounds" : "kilograms"
          }
        />
      </label>
    </div>
  );
}

export default Bmi;
