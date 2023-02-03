import {
  DropdownMenuItemsBeds,
  DropdownMenuItemsCarpets,
  DropdownMenuItemsChairs,
  DropdownMenuItemsClosets,
  DropdownMenuItemsMirros,
  DropdownMenuItemsSofa,
  DropdownMenuItemsTables,
} from "../assets/mock/dropdownMenuItemsMOCK";
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, SEARCH_ROUTE } from "./routes_consts";

export const menu_config = [
  { id: 1, label: "Sofas", link: HOME_ROUTE, dropdownItems: DropdownMenuItemsSofa },
  { id: 2, label: "Chairs", link: ADMIN_ROUTE, dropdownItems: DropdownMenuItemsChairs },
  { id: 3, label: "Tables", link: PRODUCT_ROUTE, dropdownItems: DropdownMenuItemsTables },
  { id: 4, label: "Beds", link: BASKET_ROUTE, dropdownItems: DropdownMenuItemsBeds },
  { id: 5, label: "Mirrors", link: SEARCH_ROUTE, dropdownItems: DropdownMenuItemsMirros },
  {
    id: 6,
    label: "Carpets",
    link: HOME_ROUTE,
    dropdownItems: DropdownMenuItemsCarpets,
  },
  {
    id: 7,
    label: "Closets",
    link: SEARCH_ROUTE,
    dropdownItems: DropdownMenuItemsClosets,
  },
];
