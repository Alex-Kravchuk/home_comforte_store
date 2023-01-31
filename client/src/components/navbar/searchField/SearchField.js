import React, { useCallback, useEffect, useRef } from "react";
import {
  SearchButton,
  SearchFieldContainer,
  SearchFieldWrapper,
  SearchInput,
} from "./searchField.styled";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useClickOutside } from "../../../hooks/useClickOutside";

const SearchField = ({ opened, setOpenSearch }) => {
  const searchFieldRef = useRef();
  const closeSearchFieldHandler = () => setOpenSearch(false);

  useClickOutside(searchFieldRef, opened, closeSearchFieldHandler);

  return (
    <SearchFieldWrapper opened={opened} ref={searchFieldRef}>
      <SearchFieldContainer>
        <SearchButton>
          <SearchOutlinedIcon />
        </SearchButton>

        <SearchInput placeholder="What do you wont to find?" />
        <CloseIcon onClick={closeSearchFieldHandler} />
      </SearchFieldContainer>
    </SearchFieldWrapper>
  );
};

export default SearchField;
