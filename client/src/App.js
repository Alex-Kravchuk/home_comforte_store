import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { ConfigProvider } from "antd";

import NavBar from "./components/navbar/NavBar";
import FullScreenLoader from "./components/loader/FullScreenLoader";

import {  Wrapper } from "./styles/globalStyles";
import { customTheme } from "./utils/custom_theme_styles_ANTD";
import { getMenuData } from "./redux/loading/loadingSlice";
import Footer from "./components/footer/Footer";

function App() {
  const state = useSelector((state) => state.menuData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuData());
  }, [dispatch]);

  return (
    <ConfigProvider theme={customTheme}>
      <FullScreenLoader loading={state.loadingIsActive} />
      <Wrapper>
        <NavBar />
        {/* {`${JSON.stringify(state.data)}`} */}

        <Outlet />

        <Footer />
      </Wrapper>
    </ConfigProvider>
  );
}

export default App;
