import React from "react";

const TextComponent = ({ content }: any) =>
  React.createElement("p", null, content);
const ImageComponent = ({ src, alt }: any) =>
  React.createElement("img", { src, alt });
const ButtonComponent = ({ label, onClick }: any) =>
  React.createElement("button", { onClick }, label);

const DynamicComponentsRenderer = ({ components }: any) => {
  return React.createElement(
    "div",
    null,
    components.map((component: any, index: any) => {
      switch (component.type) {
        case "text":
          return React.createElement(TextComponent, {
            key: index,
            ...component,
          });
        case "image":
          return React.createElement(ImageComponent, {
            key: index,
            ...component,
          });
        case "button":
          return React.createElement(ButtonComponent, {
            key: index,
            ...component,
          });
        default:
          return null;
      }
    })
  );
};

export const DynamicElement = () => {
  const jsonPayload = [
    { type: "text", content: "Hello, World!" },
    { type: "image", src: "path/to/image.jpg", alt: "An image" },
    {
      type: "button",
      label: "Click me",
      onClick: () => alert("Button clicked!"),
    },
  ];

  return React.createElement(
    "div",
    null,
    React.createElement(DynamicComponentsRenderer, { components: jsonPayload })
  );
};
