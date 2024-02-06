type ComponentList =
  | "Button"
  | "Card"
  | "Carousel"
  | "Image"
  | "Label"
  | "Specification";

export interface IComponent {
  type: ComponentList;
  data: {
    id: string;
    embeddedView?: IComponent;
    items?: Array<IComponent>;
    [key: string]: unknown;
  };
}
