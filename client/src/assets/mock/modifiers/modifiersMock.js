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
        title: "Wood",
        descr: "Perfomance Antimicrobial Chenille",
      },

      {
        id: 2,
        img: list_1,
        title: "Blood",
        descr: "Perfomance Antimicrobial Chenille",
      },
    ],
  },
];
