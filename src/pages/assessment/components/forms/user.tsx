import InfoSection from "@/components/info-section";
import { useFormContext } from ".";

function UserProfile() {
  const { state, dispatch } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <InfoSection
        title="Tell us about yourself"
        description="This information is used to provide you with the most accurate score."
      />

      <div className="flex w-full justify-between gap-2">
        <div className="form-control w-1/2 rounded-lg border p-2">
          <label className="label cursor-pointer">
            <span className="label-text">Male</span>
            <input
              type="radio"
              name="radio-gender"
              className="radio"
              checked={state.user.gender === "male"}
              value="male"
              onChange={(e) =>
                dispatch({
                  type: "user",
                  payload: { key: "gender", value: e.target.value },
                })
              }
            />
          </label>
        </div>

        <div className="form-control w-1/2 rounded-lg border p-2">
          <label className="label input-bordered cursor-pointer">
            <span className="label-text">Female</span>
            <input
              type="radio"
              name="radio-gender"
              className="radio"
              checked={state.user.gender === "female"}
              value="female"
              onChange={(e) =>
                dispatch({
                  type: "user",
                  payload: { key: "gender", value: e.target.value },
                })
              }
            />
          </label>
        </div>
      </div>

      <label className="input input-bordered flex w-full items-center gap-2">
        Age
        <input
          type="number"
          className="grow"
          placeholder="age"
          value={state.user.age || ""}
          onChange={(e) =>
            dispatch({
              type: "user",
              payload: { key: "age", value: Number(e.target.value) },
            })
          }
        />
      </label>
    </div>
  );
}

export default UserProfile;
