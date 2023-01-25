import Home from "../components/pages/home/Home";
import User from "../components/pages/user/User";
import Brand from "../components/pages/brand/Brand";
import Admin from "../components/pages/admin/Admin";
import Basket from "../components/pages/basket/Basket";
import Product from "../components/pages/product/Product";

import {
  HOME_ROUTE,
  ADMIN_ROUTE,
  BRAND_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
} from "../utils/routes_consts";

export const routes = [
  {
    path: PROFILE_ROUTE,
    element: <User />,
  },

  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },

  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
  {
    path: HOME_ROUTE,
    element: <Home />,
  },

  {
    path: PRODUCT_ROUTE,
    element: <Product />,
  },

  {
    path: BRAND_ROUTE,
    element: <Brand />,
  },

  {
    path: "*",
    element: <Home />,
  },
];

// export const authRoutes = [
//   {
//     path: PROFILE_ROUTE,
//     element: <User />,
//   },

//   {
//     path: ADMIN_ROUTE,
//     element: <Admin />,
//   },

//   {
//     path: BASKET_ROUTE,
//     element: <Basket />,
//   },
// ];

// export const publicRoutes = [
//   {
//     path: HOME_ROUTE,
//     element: <Home />,
//   },

//   {
//     path: PRODUCT_ROUTE,
//     element: <Product />,
//   },

//   {
//     path: BRAND_ROUTE,
//     element: <Brand />,
//   },
// ];
