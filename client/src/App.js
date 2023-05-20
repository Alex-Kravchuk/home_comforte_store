import { useEffect, useState } from "react";

import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import FullScreenLoader from "./components/loader/FullScreenLoader";

import { getMenuData } from "./redux/loading/loadingSlice";

import { GlobalStyle, Wrapper } from "./styles/globalStyles";
import { customTheme } from "./utils/custom_theme_styles_ANTD";
import { firstLogin } from "./api/user/userAPI";
import { getUserData } from "./redux/user/userSlice";
import { getGuest } from "./redux/guest/guestSlice";

function App() {
  const state = useSelector((state) => state.menuData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuData());
    // dispatch(getUserData());
    dispatch(getGuest());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ConfigProvider theme={customTheme}>
        <FullScreenLoader loading={state.loadingIsActive} />
        <Wrapper>
          <NavBar />
          {/* {`${JSON.stringify(state.data)}`} */}

          <Outlet />

          <Footer />
        </Wrapper>
      </ConfigProvider>
    </>
  );
}

export default App;
