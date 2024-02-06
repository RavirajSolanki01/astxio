"use client";
import React from "react";
import { useSelector } from "react-redux";

const DisplayForm = () => {
  const title = useSelector((state: any) => state.property.title);

  return <div className="p-2 bg-slate-400 rounded-md">Title: {title}</div>;
};

export default DisplayForm;
