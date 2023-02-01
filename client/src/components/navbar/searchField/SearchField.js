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
  const inputFieldRef = useRef();
  const closeSearchFieldHandler = () => setOpenSearch(false);

  const sendSearchRequest = () => {
    // this is a function for handling search requst
    // should use with form
    setOpenSearch(false);
  };

  useClickOutside(searchFieldRef, opened, closeSearchFieldHandler);

  useEffect(() => {
    if (opened) {
      if (inputFieldRef.current) {
        inputFieldRef.current.focus();
      }
    }
  }, [opened]);

  return (
    <SearchFieldWrapper opened={opened} ref={searchFieldRef}>
      <SearchFieldContainer>
        <SearchButton>
          <SearchOutlinedIcon onClick={sendSearchRequest} />
        </SearchButton>

        <SearchInput
          placeholder="What do you wont to find?"
          ref={inputFieldRef}
        />
        <CloseIcon onClick={closeSearchFieldHandler} />
      </SearchFieldContainer>
    </SearchFieldWrapper>
  );
};

export default SearchField;
