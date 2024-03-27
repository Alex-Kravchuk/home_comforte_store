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
  USER_ROUTE,
  HOME_ROUTE,
  ADMIN_ROUTE,
  BRAND_ROUTE,
  ABOUT_ROUTE,
  ORDER_ROUTE,
  LOGIN_ROUTE,
  BASKET_ROUTE,
  SEARCH_ROUTE,
  ADMIN_ORDERS,
  CREATE_ROUTE,
  ADD_NEW_TYPE,
  PROFILE_ROUTE,
  PRODUCT_ROUTE,
  ACCOUNT_ROUTE,
  CONTACT_ROUTE,
  SHOWROOM_ROUTE,
  SETTINGS_ROUTE,
  ADMIN_OVERVIEW,
  ADMIN_PRODUCTS,
  ADMIN_SETTINGS,
  ADD_NEW_PRODUCT,
  ADD_NEW_CATEGORY,
  PAYMENT_SETTINGS,
  PERSONAL_SETTINGS,
  CONTACTS_SETTINGS,
  ADMIN_NOTIFICATIONS,
  ADMIN_PRODUCTS_EDIT,
  RESET_PASSWORD_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  ADMIN_PRODUCTS_PREVIEW,
  ADMIN_PRODUCTS_CATEGORY,
  ADMIN_PRODUCTS_ADD,
  CATEGORY_ROUTE,
  PRODUCTLIIST_ROUTE,
} from "../utils/routes_consts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Search from "../components/pages/search/Search";
import Account from "../components/pages/account/Account";
import LogIn from "../components/pages/account/LogIn/LogIn";
import SignUp from "../components/pages/account/SignUp/SignUp";
import RequireAuth from "../hoc/RequireAuth";
import ForgotPassword from "../components/pages/account/forgotResetPassword/forgotPassword/ForgotPassword";
import ResetPassword from "../components/pages/account/forgotResetPassword/resetPassword/ResetPassword";
import Profile from "../components/pages/user/userPages/profile/Profile";
import Settings from "../components/pages/user/userPages/settings/Settings";
import Order from "../components/pages/user/userPages/order/Order";

import Payment from "../components/pages/user/userPages/settings/Tabs/Payment/Payment";
import Personal from "../components/pages/user/userPages/settings/Tabs/Personal/Personal";
import Contacts from "../components/pages/user/userPages/settings/Tabs/Contacts/Contacts";

import AdminSettings from "../components/pages/admin/adminPages/adminSettings/AdminSettings";
import AdminOrders from "../components/pages/admin/adminPages/adminOrders/AdminOrders";
import Overview from "../components/pages/admin/adminPages/overview/Overview";
import AdminProducts from "../components/pages/admin/adminPages/adminProducts/AdminProducts";
import AdminNotifications from "../components/pages/admin/adminPages/adminNotification/AdminNotification";
import AddNewCategory from "../components/pages/admin/adminPages/adminProducts/CategoriesAndTypes/CategoriesAndTypes";
import EditProducts from "../components/pages/admin/adminPages/adminProducts/EditProducts/EditProducts";
import ProductPreview from "../components/pages/product/Demonstration/ProductPreview/ProductPreview";
import PreviewProductPage from "../components/pages/product/PreviewProductPage/PreviewProductPage";
import AddProduct from "../components/pages/admin/adminPages/adminProducts/AddProduct/AddProduct";
import Category from "../components/pages/category/Category";
import NotFoundPage from "../components/pages/404/notFoundPage";
import ProductList from "../components/pages/productList/ProductList";

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

      <Route path={ACCOUNT_ROUTE} element={<Account />}>
        <Route path={LOGIN_ROUTE} element={<LogIn />} />
        <Route path={CREATE_ROUTE} element={<SignUp />} />
        <Route path={FORGOT_PASSWORD_ROUTE} element={<ForgotPassword />} />
        <Route
          path={`${RESET_PASSWORD_ROUTE}/:token/:userId`}
          element={<ResetPassword />}
        />
        <Route
          path={USER_ROUTE}
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        >
          <Route path={PROFILE_ROUTE} element={<Profile />}>
            <Route path={ORDER_ROUTE + "/:id"} element={<Order />} />
          </Route>
          <Route path={SETTINGS_ROUTE} element={<Settings />}>
            <Route path={PERSONAL_SETTINGS} element={<Personal />} />
            <Route path={CONTACTS_SETTINGS} element={<Contacts />} />
            <Route path={PAYMENT_SETTINGS} element={<Payment />} />
          </Route>
        </Route>
        <Route path={ADMIN_ROUTE} element={<Admin />}>
          <Route path={ADMIN_OVERVIEW} element={<Overview />} />
          <Route path={ADMIN_PRODUCTS} element={<AdminProducts />}>
            <Route
              path={ADMIN_PRODUCTS_CATEGORY}
              element={<AddNewCategory />}
            />
            <Route path={ADMIN_PRODUCTS_EDIT} element={<EditProducts />} />
            <Route path={ADMIN_PRODUCTS_ADD} element={<AddProduct />} />
          </Route>
          <Route path={ADMIN_ORDERS} element={<AdminOrders />} />
          <Route path={ADMIN_NOTIFICATIONS} element={<AdminNotifications />} />
          <Route path={ADMIN_SETTINGS} element={<AdminSettings />} />
          <Route
            path={ADMIN_PRODUCTS_PREVIEW}
            element={<PreviewProductPage />}
          />
        </Route>
      </Route>

      <Route path={CATEGORY_ROUTE} element={<Category />} />
      <Route path={PRODUCTLIIST_ROUTE} element={<ProductList />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path={PRODUCT_ROUTE} element={<Product />} />
      <Route path={BRAND_ROUTE} element={<Brand />} />
      <Route path={SEARCH_ROUTE} element={<Search />} />

      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={CONTACT_ROUTE} element={<Contact />} />
      <Route path={SHOWROOM_ROUTE} element={<Showroom />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
