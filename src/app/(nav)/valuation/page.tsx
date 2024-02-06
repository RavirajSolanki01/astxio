'use client'
import { ComponentList, createPage } from "@/components/Dynamic/dynamicFun";
import { CardData } from "@/utils/data";
import React from "react";
import { createElement } from "react";

const Valuation = () => {
  // const Card = (prop: any) =>
  //   createElement(
  //     "div",
  //     { className: "bg-red-500 w-[100px]" },

  //     createElement("p", { className: "hello" }, prop.name),
  //     createElement("p", { className: "2hello" }, prop.age)
  //   );

  // return createElement(
  //   "div",
  //   null,
  //   createElement(Card, { name: "Hello there", })
  // );

  // -----------------------TESTING---------------

  // const VCard = (props: any) => (
  //   <div className="bg-red-500">
  //     <p>Name: {props.name}</p>
  //     <p>Age: {props.age}</p>
  //   </div>
  // );

  // return (
  //   <div>
  //     <VCard name={"Hello"} age={23} />
  //   </div>
  // );


  const renderedComponents = createPage(CardData);

  return (
    <div>
      {renderedComponents}
    </div>
  );

};

export default Valuation;
