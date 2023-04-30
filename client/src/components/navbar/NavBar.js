import React, { useEffect, useRef, useState } from "react";

import { EmptyContainer, NavWrapper, RelativeContainer } from "./NavBar.styled";
import SearchField from "./searchField/SearchField";

import { useScrollObserver } from "../../hooks/useScrollObserver";
import NavContainer from "./navContainer/NavContainer";
import { getAllCategories } from "../../api/product/productAPI";

const NavBar = () => {
  const [openSearchField, setOpenSearchField] = useState(false);
  const [menuCategories, setCategories] = useState([]);
  const scrollDown = useScrollObserver();

  useEffect(() => {
    const getCategories = async () => {
      const response = await getAllCategories();
      setCategories(response);
    };

    getCategories();
  }, []);

  console.log("categories navbar", menuCategories);

  return (
    <NavWrapper scrollDown={scrollDown} openSearchField={openSearchField}>
      <RelativeContainer scrollDown={scrollDown}>
        <EmptyContainer />

        <NavContainer
          menuCategories={menuCategories}
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
