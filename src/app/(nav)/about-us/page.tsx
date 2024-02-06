import React from "react";


const AboutUs = () => {
  const data = ["one", "two", "three", "four"];
  const objData = [
    { id: "1", name: "ravi", age: 24 },
    {
      id: "2",
      name: "raj",
      age: 33,
    },
    {
      id: "3",
      name: "Ronak",
    },
  ];

  
  const dummyData = {
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

  // return React.createElement(
  //   "div",
  //   { className: "found" },
  //   data.map((item) => React.createElement("div", { key: item }, item))
  // );

  return React.createElement(
    "div",
    null,
    objData.map(({ id, name, age }) => React.createElement("div", { key: id }))
  );
};

export default AboutUs;
