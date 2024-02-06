import React from "react";

export type ComponentList = "button" | "div" | "input" | "img" | "hr";

export interface MyComponent {
  type: ComponentList;
  data: {
    id: string;
    embeddedView?: MyComponent;
    items?: Array<MyComponent>;
    [key: string]: unknown;
  };
}

export const Components = {
  input: "input",
  button: "button",
  div: "div",
  img: "img",
  hr: "hr",
};

export function createNewPage(data?: MyComponent): React.ReactNode {
  if (!data) return null;
  function createComponent(item: MyComponent): React.ReactNode {
    const { data, type } = item;
    const { id, embeddedView, items, ...rest } = data;

    return React.createElement(
      Components[type],
      {
        ...rest,
        id,
        key: id,
      },
      Array.isArray(items)
        ? items.map(renderer)
        : renderer(embeddedView ?? null)
    );
  }

  function renderer(config: MyComponent | null): React.ReactNode {
    if (!config) return null;
    return createComponent(config);
  }
  return renderer(data);
}
