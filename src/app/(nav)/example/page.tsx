import React from "react";
import mockData from "@/DynamicRendering/dynamic-rendering.mock";
import { IComponent } from "@/DynamicRendering/dynamic-rendering.interface";
import { createRPage } from "@/DynamicRendering/dynamic-rendering.service";

const Example = () => {
  const renderedComponents = createRPage(mockData as IComponent);

  return <div className="px-[50px]">{renderedComponents}</div>;

  // return (
  //   <div>
  //     <div className="w-60 h-60 bg-white shadow-lg border rounded flex flex-col">
  //       <img src="/land.png" className="h-full w-full object-cover" alt="img" />
  //       <div className="flex w-full justify-between">
  //         <span>Equity Loan</span>
  //         <span className="rounded border border-red-500">New Build</span>
  //       </div>
  //       <div className="text-3xl">$6000</div>
  //       <div>Beautiful Apartment</div>

  //     </div>
  //   </div>
  // );
};

export default Example;
