import {
  DropdownMenuItemsBeds,
  DropdownMenuItemsCarpets,
  DropdownMenuItemsChairs,
  DropdownMenuItemsClosets,
  DropdownMenuItemsMirros,
  DropdownMenuItemsSofa,
  DropdownMenuItemsTables,
} from "../assets/mock/dropdownMenuItemsMOCK";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  PRODUCT_ROUTE,
  SEARCH_ROUTE,
} from "./routes_consts";

import BedImg from "../assets/img/bed_example.jpg";
import SofaImg from "../assets/img/sofa_example.jpg";
import ChairsImg from "../assets/img/chairs_example.jpg";
import TableImg from "../assets/img/table_example.jpg";
import MirrorImg from "../assets/img/mirror_example.jpeg";
import CarpetImg from "../assets/img/carpet_example.jpg";
import ClosetImg from "../assets/img/closet_example.jpg";

export const menu_config = [
  {
    id: 1,
    label: "Sofas",
    link: HOME_ROUTE,
    dropdownItems: DropdownMenuItemsSofa,
    menuImg: SofaImg,
  },
  {
    id: 2,
    label: "Chairs",
    link: ADMIN_ROUTE,
    dropdownItems: DropdownMenuItemsChairs,
    menuImg: ChairsImg,
  },
  {
    id: 3,
    label: "Tables",
    link: PRODUCT_ROUTE,
    dropdownItems: DropdownMenuItemsTables,
    menuImg: TableImg,
  },
  {
    id: 4,
    label: "Beds",
    link: BASKET_ROUTE,
    dropdownItems: DropdownMenuItemsBeds,
    menuImg: BedImg,
  },
  {
    id: 5,
    label: "Mirrors",
    link: SEARCH_ROUTE,
    dropdownItems: DropdownMenuItemsMirros,
    menuImg: MirrorImg,
  },
  {
    id: 6,
    label: "Carpets",
    link: HOME_ROUTE,
    dropdownItems: DropdownMenuItemsCarpets,
    menuImg: CarpetImg,
  },
  {
    id: 7,
    label: "Closets",
    link: SEARCH_ROUTE,
    dropdownItems: DropdownMenuItemsClosets,
    menuImg: ClosetImg,
  },
];
