import { useEffect } from "react";

import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import StartScreenLoader from "./components/loader/startScreenLoader/FullScreenLoader";

import { getGuest } from "./redux/guest/guestSlice";
import { getUserData } from "./redux/user/userSlice";
import { getMenuData } from "./redux/loading/loadingSlice";

import { GlobalStyle, Wrapper } from "./styles/globalStyles";
import { customTheme } from "./utils/custom_theme_styles_ANTD";

function App() {
  const state = useSelector((state) => state.menuData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuData());
    dispatch(getUserData());
    dispatch(getGuest());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ConfigProvider theme={customTheme}>
        <StartScreenLoader loading={state.loadingIsActive} />
        <Wrapper>
          <NavBar />
          <Outlet />
          <Footer />
        </Wrapper>
      </ConfigProvider>
    </>
  );
}

export default App;
