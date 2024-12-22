/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, createContext, useContext, useReducer } from "react";

import UserProfile from "./user";
import Bmi from "./bmi";

type FormContextType = {
  state: AssessmentFormType;
  dispatch: React.Dispatch<Actions>;
};

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useFormContext must be used within a FormContext.Provider",
    );
  }
  return context;
};

type User = {
  gender: "male" | "female" | null;
  age: number | null;
  measurement: "imperial" | "metric";
  weight: number | null;
  height: number | null;
};

type AssessmentFormType = {
  user: User;
};

type Actions =
  | {
      type: "reset";
    }
  | {
      type: "user";
      payload: {
        key: keyof User;
        value: any;
      };
    };

const reducer = (state: AssessmentFormType, action: Actions) => {
  switch (action.type) {
    case "user":
      return {
        ...state,
        user: { ...state.user, [action.payload.key]: action.payload.value },
      };

    case "reset":
      return initialState;
  }
};

const initialState: AssessmentFormType = {
  user: {
    gender: null,
    age: null,
    measurement: "imperial",
    weight: null,
    height: null,
  },
};

function AssessmentForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form onSubmit={handleSubmit}>
        <UserProfile />
        <Bmi />
      </form>
    </FormContext.Provider>
  );
}

export default AssessmentForm;
