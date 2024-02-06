import { IComponent } from "./dynamic-rendering.interface";

const mockData: IComponent = {
  type: "Card",
  data: {
    id: "cs8scs87-23",
    className: "flex gap-2 bg-[#fafafa]",
    items: [
      {
        type: "Card",
        data: {
          id: "csd9cs",
          className: "rounded-md",
          hasShadow: true,
          items: [
            {
              type: "Carousel",
              data: {
                id: "c8scs8c7s",
                imgData: ["/land.png", "/land.png"],
              },
            },
            {
              type: "Card",
              data: {
                id: "vs0cs99v",
                className: "p-4",
                items: [
                  {
                    type: "Card",
                    data: {
                      id: "h34h45",
                      className: "flex justify-between items-center",
                      items: [
                        {
                          type: "Label",
                          data: {
                            id: "h34h4542",
                            labelType: "",
                            className: "",
                            text: "Equity Loan",
                          },
                        },
                        {
                          type: "Label",
                          data: {
                            labelType: "chip",
                            id: "h34h4325",
                            className: "",
                            text: "New Build",
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "h34h45",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h4542",
                          labelType: "amount",
                          className: "my-2",
                          text: "65200",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "name",
                          className: "",
                          text: "Beautiful Apartments",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "location",
                          className: "",
                          text: "Shree Garden 1132, UK",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4rr44ss5",
                      embeddedView: {
                        type: "Specification",
                        data: {
                          id: "h34h454da2",
                          className: "",
                          bed: 2,
                          sofa: 3,
                          size: 145,
                          bathroom: 3,
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "sn9d9sdc9sdc9sd",
                      className: "flex flex-col gap-3 mb-3",
                      items: [
                        {
                          type: "Button",
                          data: {
                            id: "h34h4rss4ss5",
                            title: "Arrange a viewing",
                            outline: true,
                            action: {
                              type: "call",
                              url: "/viewing",
                            },
                          },
                        },
                        {
                          type: "Button",
                          data: {
                            id: "h34h44rss4ss5",
                            title: "View full details",
                            action: {
                              type: "call",
                              url: "details",
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: "Card",
        data: {
          id: "csd9csr",
          className: "rounded-md",
          hasShadow: true,
          items: [
            {
              type: "Image",
              data: {
                id: "c8scs8c7s",
                src: "/land.png",
              },
            },
            {
              type: "Card",
              data: {
                id: "vs0cs99v",
                className: "p-4",
                items: [
                  {
                    type: "Card",
                    data: {
                      id: "h34h45",
                      className: "flex justify-between items-center",
                      items: [
                        {
                          type: "Label",
                          data: {
                            id: "h34h4542",
                            labelType: "",
                            className: "",
                            text: "Equity Loan",
                          },
                        },
                        {
                          type: "Label",
                          data: {
                            labelType: "chip",
                            id: "h34h4325",
                            className: "",
                            text: "New Build",
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "h34h45",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h4542",
                          labelType: "amount",
                          className: "my-2",
                          text: "65200",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "name",
                          className: "",
                          text: "Beautiful Apartments",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "location",
                          className: "",
                          text: "Shree Garden 1132, UK",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4rr44ss5",
                      embeddedView: {
                        type: "Specification",
                        data: {
                          id: "h34h454da2",
                          className: "",
                          bed: 2,
                          sofa: 3,
                          size: 145,
                          bathroom: 3,
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "sn9d9sdc9sdc9sd",
                      className: "flex flex-col gap-3 mb-3",
                      items: [
                        {
                          type: "Button",
                          data: {
                            id: "h34h4rss4ss5",
                            title: "Book a call",
                            outline: true,
                            action: {
                              type: "call",
                              url: "/viewing",
                            },
                          },
                        },
                        {
                          type: "Button",
                          data: {
                            id: "h34h44rss4ss5",
                            title: "Know more",
                            action: {
                              type: "call",
                              url: "details",
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: "Card",
        data: {
          id: "csd9cs",
          className: "rounded-md",
          hasShadow: true,
          items: [
            {
              type: "Carousel",
              data: {
                id: "c8scs8c7s",
                imgData: ["/land.png", "/land.png"],
              },
            },
            {
              type: "Card",
              data: {
                id: "vs0cs99v",
                className: "p-4",
                items: [
                  {
                    type: "Card",
                    data: {
                      id: "h34h45",
                      className: "flex justify-between items-center",
                      items: [
                        {
                          type: "Label",
                          data: {
                            id: "h34h4542",
                            labelType: "",
                            className: "",
                            text: "Equity Loan",
                          },
                        },
                        {
                          type: "Label",
                          data: {
                            labelType: "chip",
                            id: "h34h4325",
                            className: "",
                            text: "New Build",
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "h34h45",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h4542",
                          labelType: "amount",
                          className: "my-2",
                          text: "65200",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "name",
                          className: "",
                          text: "Beautiful Apartments",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "location",
                          className: "",
                          text: "Shree Garden 1132, UK",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4rr44ss5",
                      embeddedView: {
                        type: "Specification",
                        data: {
                          id: "h34h454da2",
                          className: "",
                          bed: 2,
                          sofa: 3,
                          size: 145,
                          bathroom: 3,
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "sn9d9sdc9sdc9sd",
                      className: "flex flex-col gap-3 mb-3",
                      items: [
                        // {
                        //   type: "Button",
                        //   data: {
                        //     id: "h34h4rss4ss5",
                        //     title: "Arrange a viewing",
                        //     outline: true,
                        //     action: {
                        //       type: "call",
                        //       url: "/viewing",
                        //     },
                        //   },
                        // },
                        {
                          type: "Button",
                          data: {
                            id: "h34h44rss4ss5",
                            title: "View full details",
                            action: {
                              type: "call",
                              url: "details",
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: "Card",
        data: {
          id: "csd9csr",
          className: "rounded-md",
          hasShadow: true,
          items: [
            {
              type: "Image",
              data: {
                id: "c8scs8c7s",
                src: "/land.png",
              },
            },
            {
              type: "Card",
              data: {
                id: "vs0cs99v",
                className: "p-4",
                items: [
                  {
                    type: "Card",
                    data: {
                      id: "h34h45",
                      className: "flex justify-between items-center",
                      items: [
                        {
                          type: "Label",
                          data: {
                            id: "h34h4542",
                            labelType: "",
                            className: "",
                            text: "Equity Loan",
                          },
                        },
                        {
                          type: "Label",
                          data: {
                            labelType: "chip",
                            id: "h34h4325",
                            className: "",
                            text: "New Build",
                          },
                        },
                      ],
                    },
                  },
                //   {
                //     type: "Card",
                //     data: {
                //       id: "h34h45",
                //       embeddedView: {
                //         type: "Label",
                //         data: {
                //           id: "h34h4542",
                //           labelType: "amount",
                //           className: "my-2",
                //           text: "65200",
                //         },
                //       },
                //     },
                //   },
                  {
                    type: "Card",
                    data: {
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "name",
                          className: "",
                          text: "Beautiful Apartments",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4r4ss5",
                      embeddedView: {
                        type: "Label",
                        data: {
                          id: "h34h454da2",
                          labelType: "location",
                          className: "",
                          text: "Shree Garden 1132, UK",
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      className: "my-2",
                      id: "h34h4rr44ss5",
                      embeddedView: {
                        type: "Specification",
                        data: {
                          id: "h34h454da2",
                          className: "",
                          bed: 2,
                          sofa: 3,
                          size: 145,
                          bathroom: 3,
                        },
                      },
                    },
                  },
                  {
                    type: "Card",
                    data: {
                      id: "sn9d9sdc9sdc9sd",
                      className: "flex flex-col gap-3 mb-3",
                      items: [
                        {
                          type: "Button",
                          data: {
                            id: "h34h4rss4ss5",
                            title: "Book a call",
                            outline: true,
                            action: {
                              type: "call",
                              url: "/viewing",
                            },
                          },
                        },
                        {
                          type: "Button",
                          data: {
                            id: "h34h44rss4ss5",
                            title: "Know more",
                            action: {
                              type: "call",
                              url: "details",
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

export default mockData;
