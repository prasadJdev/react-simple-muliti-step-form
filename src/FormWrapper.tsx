import { ReactNode } from "react";

type FormWrapperprops = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperprops) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "0", marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
