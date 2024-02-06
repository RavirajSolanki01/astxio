import React from "react";

// type ComponentList = "Button" | "Card" | "Container" | "Divider" | "Input";

type ComponentList = "button" | "div" | "input" | "p";

export interface IComponent {
  type: ComponentList;
  data: {
    id: string;
    embeddedView?: IComponent;
    items?: Array<IComponent>;
    [key: string]: unknown;
  };
}

const Components = {
  button: "button",
  div: "div",
  input: "input",
  p: "p",
};

const myData = {
  type: "div",
  data: {
    id: "4400936b-6158-4943-9dc8-a04c57e1af46",
    title: "Button text",
    className: "btn-primary",
    items: [
      {
        type: "button",
        data: {
          id: "13432184181331",
          title: "Login btn",
          className: "login",
        },
      },
    ],
  },
};



export function MarketInsights(data?: IComponent): React.ReactNode {
  // Don't render anything if the payload is falsey.
  if (!data) return null;

  function createComponent(item: IComponent): React.ReactNode {
      const { data, type } = item;
      const { items, embeddedView, id, ...rest } = data;
      return React.createElement(
          // TODO: This can be improved
          Components[type] as any,
          {
              // Pass all the props coming from the data object.
              ...rest,
              id,
              // Make each react key unique
              key: id,
          } as any,
          // Map if there are items, if not try to render the embedded view as children
          Array.isArray(items)
              ? items.map(renderer)
              : renderer(embeddedView ?? null),
      );
  }

  // Don't render anything if the payload is false.
  function renderer(
      config: IComponent | null,
  ): React.ReactNode {
      if (!config) return null;

      return createComponent(config);
  }

  return renderer(data);
}

// export default MarketInsights;
