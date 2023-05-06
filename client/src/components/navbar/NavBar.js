import React, { useState } from "react";

import SearchField from "./searchField/SearchField";
import NavContainer from "./navContainer/NavContainer";

import { useScrollObserver } from "../../hooks/useScrollObserver";

import { EmptyContainer, NavWrapper, RelativeContainer } from "./NavBar.styled";

const NavBar = () => {
  const [openSearchField, setOpenSearchField] = useState(false);
  const scrollDown = useScrollObserver();

  return (
    <NavWrapper scrollDown={scrollDown} openSearchField={openSearchField}>
      <RelativeContainer scrollDown={scrollDown}>
        <EmptyContainer />

        <NavContainer
          setOpenSearchField={setOpenSearchField}
          scrollDown={scrollDown}
        />

        <SearchField
          opened={openSearchField}
          setOpenSearch={setOpenSearchField}
        />
      </RelativeContainer>
    </NavWrapper>
  );
};

export default NavBar;
