import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import { Wrapper } from "./styles/globalStyles";
import { customTheme } from "./utils/custom_theme_styles_ANTD";

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <Wrapper>
        <NavBar />
        <Outlet />
      </Wrapper>
    </ConfigProvider>
  );
}

export default App;
