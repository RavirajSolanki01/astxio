import React from "react";
import { Button, Card, Divider, Container, Input } from "@mui/material";

export type ComponentList =
  | "Button"
  | "Card"
  | "Container"
  | "Divider"
  | "Input";

export interface IComponent {
  type: ComponentList;
  data: {
    id: string;
    embeddedView?: IComponent;
    items?: Array<IComponent>;
    [key: string]: unknown;
  };
}

export const Components = {
  Button,
  Card,
  Container,
  Divider,
  Input,
};

export function createPage(data?: IComponent): React.ReactNode {
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
        : renderer(embeddedView ?? null)
    );
  }

  // Don't render anything if the payload is falsey.
  function renderer(config: IComponent | null): React.ReactNode {
    if (!config) return null;

    return createComponent(config);
  }

  return renderer(data);
}
