import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import { Container, PageWrapper, Wrapper } from "./styles/globalStyles";

function App() {
  return (
    <Wrapper>
      <NavBar />

      <Outlet />
    </Wrapper>
  );
}

export default App;
