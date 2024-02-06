import React from "react";
import DisplayForm from "./DisplayForm";
import InputForm from "./InputForm";

const Testing = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="min-w-[300px] flex flex-col gap-2">
        <DisplayForm />
        <InputForm />
      </div>
    </div>
  );
};

export default Testing;
