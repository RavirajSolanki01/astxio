import React from "react";
import { IComponent } from "./dynamic-rendering.interface";
import { Components } from "./dynamic-rendering.constant";

export function createRPage(data?: IComponent): React.ReactNode {
  if (!data) return null;

  function createComponent(item: IComponent): React.ReactNode {
    const { data, type } = item;
    const { items, embeddedView, id, ...rest } = data;
    // console.log(typeof type,"--type", typeof Components);
    
    return React.createElement(
       Components[type] as any,
      {
        ...rest,
        key: id,
      } as any,
      Array.isArray(items)
        ? items.map(renderer)
        : renderer(embeddedView ?? null)
    );
  }

  function renderer(config: IComponent | null): React.ReactNode {
    // console.log(config, "DATA--00");
    
    if (!config) return null;


    return createComponent(config);
  }

  return renderer(data);
}
