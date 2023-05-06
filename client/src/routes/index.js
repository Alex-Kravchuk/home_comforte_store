import App from "../App";

import Home from "../components/pages/home/Home";
import User from "../components/pages/user/User";
import About from "../components/pages/about/About";
import Brand from "../components/pages/brand/Brand";
import Admin from "../components/pages/admin/Admin";
import Basket from "../components/pages/basket/Basket";
import Contact from "../components/pages/contact/Contact";
import Product from "../components/pages/product/Product";
import Showroom from "../components/pages/showrooms/ShowRoom";

import { Provider, useSelector } from "react-redux";

import { store } from "../redux/index";

import {
  HOME_ROUTE,
  ADMIN_ROUTE,
  BRAND_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  SEARCH_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  SHOWROOM_ROUTE,
} from "../utils/routes_consts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Search from "../components/pages/search/Search";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={HOME_ROUTE}
      element={
        <Provider store={store}>
          <App />
        </Provider>
      }
    >
      <Route index element={<Home />} />
      <Route path={PROFILE_ROUTE} element={<User />} />
      <Route path={ADMIN_ROUTE} element={<Admin />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path={PRODUCT_ROUTE} element={<Product />} />
      <Route path={BRAND_ROUTE} element={<Brand />} />
      <Route path={SEARCH_ROUTE} element={<Search />} />

      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={CONTACT_ROUTE} element={<Contact />} />
      <Route path={SHOWROOM_ROUTE} element={<Showroom />} />
    </Route>
  )
);
