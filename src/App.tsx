import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultiStepForm } from "./useMultiStepForm";
import { UserForm } from "./UserForm";
type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } =
    useMultiStepForm([
      <UserForm {...data} updateFeilds={updateFeilds} />,
      <AddressForm {...data} updateFeilds={updateFeilds} />,
      <AccountForm {...data} updateFeilds={updateFeilds} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // next();
    if (!isLastStep) next();
    else{alert("Form Submitted Succussfully")};
  }
  function updateFeilds(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  return (
    <div
      style={{
        position: "relative",
        // background: "white",
        border: "1px solid #000",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
