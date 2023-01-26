import App from "../App";
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
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_ROUTE} element={<App />}>
      <Route index element={<Home />} />
      <Route path={PROFILE_ROUTE} element={<User />} />
      <Route path={ADMIN_ROUTE} element={<Admin />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path={PRODUCT_ROUTE} element={<Product />} />
      <Route path={BRAND_ROUTE} element={<Brand />} />
    </Route>
  )
);
