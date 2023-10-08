import list_1 from "../../img/modifiers/list/list_1.jpg";
import list_2 from "../../img/modifiers/list/list_2.jpg";
import list_3 from "../../img/modifiers/list/list_3.webp";

import tile1 from "../../img/modifiers/tile/tile1.svg";
import tile2 from "../../img/modifiers/tile/tile2.svg";

export const modifiersMock = [
  {
    id: 1,
    name: "Choose Fabric",
    displayMethod: "list",
    items: [
      {
        id: 1,
        img: list_1,
        title: "Cement",
        descr: "Perfomance Antimicrobial Chenille",
      },

      {
        id: 2,
        img: list_2,
        title: "Harbour",
        descr: "Perfomance Velvet",
      },

      {
        id: 3,
        img: list_3,
        title: "Terracote",
        descr: null,
      },

      {
        id: 4,
        img: list_3,
        title: "Terracote",
        descr: "Perfomance Antimicrobial Chenille",
      },

      {
        id: 5,
        img: list_3,
        title: "Terracote",
        descr: "Perfomance Antimicrobial Chenille",
      },
      {
        id: 6,
        img: list_2,
        title: "Harbour",
        descr: "Perfomance Velvet",
      },
      {
        id: 7,
        img: list_1,
        title: "Cement",
        descr: "Perfomance Antimicrobial Chenille",
      },

      {
        id: 8,
        img: list_2,
        title: "Harbour",
        descr: "Perfomance Velvet",
      },

      {
        id: 9,
        img: list_1,
        title: "Cement",
        descr: "Perfomance Antimicrobial Chenille",
      },

      {
        id: 10,
        img: list_2,
        title: "Harbour",
        descr: "Perfomance Velvet",
      },
    ],
  },

  {
    id: 2,
    name: "Choose Legs",
    displayMethod: "list",
    items: [
      {
        id: 1,
        img: list_1,
        title: "Cement",
        descr: "Perfomance Antimicrobial Chenille",
      },
    ],
  },
  {
    id: 3,
    name: "Choose Size",
    displayMethod: "cell",
    items: [
      {
        id: 1,
        title: "75''",
        price: "Included",
      },
      {
        id: 2,
        title: "79''",
        price: "+$100",
      },
      {
        id: 3,
        title: "83''",
        price: "+$200",
      },
      {
        id: 4,
        title: "87''",
        price: "+$300",
      },
      {
        id: 5,
        title: "91''",
        price: "+$400",
      },
      {
        id: 6,
        title: "79''",
        price: "+$100",
      },
      {
        id: 7,
        title: "83''",
        price: "+$200",
      },
    ],
  },
  {
    id: 4,
    name: "Choose Cushion Fill",
    displayMethod: "tile",
    items: [
      {
        id: 1,
        title: "Standart down blend",
        price: "Included",
        img: tile1,
        descr:
          "A non-reversible cushion with a firmer sit.Multi-layer foam base with rounded down blend top; requires periodic cushion fluffing.",
      },

      {
        id: 2,
        title: "Double down blend",
        price: "+$225",
        img: tile2,
        descr:
          "A plush reversible cushion with the softest sit.Multi-layer foam core wrapped in a down blend; requires frequent cushion fluffing",
      },
      // {
      //   id: 3,
      //   title: "Down alternative",
      //   price: "+$200",
      //   img: tile2,
      //   descr:
      //     "A level reversible cushion with a soft and supportive sit.Multi-layer reversible foam seat; requires minimal cushion fluffing.",
      // },
    ],
  },
];
