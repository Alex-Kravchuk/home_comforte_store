import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import { Container, Wrapper } from "./styles/globalStyles";

function App() {
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
}

export default App;
