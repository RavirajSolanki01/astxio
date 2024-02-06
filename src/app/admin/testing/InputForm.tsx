"use client";
// import { addPropertyFeature } from "@/redux/propertySlice";
import React from "react";
import { useDispatch } from "react-redux";

const InputForm = () => {
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    // dispatch(addPropertyFeature({ title: e.target.value }));
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        className="w-full border-none bg-slate-100 rounded-md p-2"
      />
    </div>
  );
};

export default InputForm;
