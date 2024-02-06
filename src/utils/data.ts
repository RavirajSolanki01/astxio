import { IComponent } from "@/components/Dynamic/dynamicFun";

export const properties = [
  {
    property_type: "Equity Loan",
    build: "New Build",
    price: "600900",
    title: "Beautiful Apartments",
    location: "Shree Garden 1132, UK",
    sofa: 4,
    bed: 2,
    bathroom: 4,
    size: 187,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Mortgage",
    build: "Existing Home",
    price: "450000",
    title: "Cozy Cottage",
    location: "Rose Street 25, UK",
    sofa: 3,
    bed: 2,
    bathroom: 2,
    size: 150,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Shared Ownership",
    build: "New Build",
    price: "320000",
    title: "Modern Townhouse",
    location: "Green Valley 567, UK",
    sofa: 5,
    bed: 3,
    bathroom: 3,
    size: 200,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Equity Loan",
    build: "New Build",
    price: "720000",
    title: "Luxury Penthouse",
    location: "Golden Towers 88, UK",
    sofa: 6,
    bed: 3,
    bathroom: 4,
    size: 250,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Mortgage",
    build: "Existing Home",
    price: "550000",
    title: "Riverside Villa",
    location: "Blue Harbor 42, UK",
    sofa: 5,
    bed: 4,
    bathroom: 5,
    size: 300,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Shared Ownership",
    build: "New Build",
    price: "380000",
    title: "Contemporary Loft",
    location: "Artisan Square 789, UK",
    sofa: 4,
    bed: 2,
    bathroom: 3,
    size: 180,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Equity Loan",
    build: "New Build",
    price: "680000",
    title: "Skyline Condo",
    location: "City Heights 123, UK",
    sofa: 5,
    bed: 3,
    bathroom: 4,
    size: 220,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Mortgage",
    build: "Existing Home",
    price: "500000",
    title: "Classic Manor",
    location: "Royal Avenue 55, UK",
    sofa: 6,
    bed: 4,
    bathroom: 6,
    size: 350,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Shared Ownership",
    build: "New Build",
    price: "350000",
    title: "Urban Retreat",
    location: "Metropolitan Plaza 456, UK",
    sofa: 3,
    bed: 2,
    bathroom: 2,
    size: 160,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Equity Loan",
    build: "New Build",
    price: "740000",
    title: "Grand Mansion",
    location: "Estate Gardens 789, UK",
    sofa: 7,
    bed: 5,
    bathroom: 7,
    size: 400,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
  {
    property_type: "Mortgage",
    build: "Existing Home",
    price: "580000",
    title: "Seaside Retreat",
    location: "Ocean View 33, UK",
    sofa: 4,
    bed: 3,
    bathroom: 3,
    size: 180,
    imgData: ["/land.png", "/land.png", "/land.png"],
  },
];

// export default properties;

export const CardData: IComponent = {
  type: "Container",
  data: {
    id: "4400936b-6158-4943-9dc8-a04c57e1af46",
    items: [
      {
        type: "Card",
        data: {
          id: "26b3f355-2f65-4aae-b9fd-609779f24fdd",
          title: "A card example",
          subtitle: "A subtitle",
          items: [
            {
              type: "Button",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46",
                title: "Button text",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
          ],
        },
      },
      {
        type: "Divider",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af46",
          marginX: 3,
        },
      },
      {
        type: "Card",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af46",
          title: "Title",
          headline: "Month ## - Month ##, ####",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
        },
      },
      {
        type: "Container",
        data: {
          id: "d76e3a5f-01ad-46f6-a45d-3ad9699ecf99",
          fluid: true,
          embeddedView: {
            type: "Input",
            data: {
              id: "26b3f355-2f65-4aae-b9fd-609779f24fdd",
              label: "Input",
              type: "password",
              placeholder: "Password",
              isRequired: false,
              minCharactersAllowed: 1,
              maxCharactersAllowed: 100,
              validations: [
                {
                  regexType: "eightOrMoreCharacters",
                  regexErrorCopy: "Use 8 or more characters",
                },
              ],
            },
          },
        },
      },
    ],
  },
};

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

export const NewData: MyComponent = {
  type: "div",
  data: {
    id: "4400936b-6158-4943-9dc8-a04c57e1af46",
    items: [
      {
        type: "div",
        data: {
          id: "jcn2oc23d-979879",
          items: [
            {
              type: "div",
              data: {
                id: "co3sj78scs9-cs4hbs88sd",
                title: "Login button",
                className: "bg-red-500 rounded",
              },
            },
          ],
        },
      },
      {
        type: "hr",
        data: {
          id: "2huh2-jvn4fd9",
          className: "my-2 text-blue-500 bg-yellow-500",
        },
      },
    ],
  },
};
