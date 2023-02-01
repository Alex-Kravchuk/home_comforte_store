import React, { useEffect, useRef, useState } from "react";
import {
  SearchButton,
  SearchFieldContainer,
  SearchFieldWrapper,
  SearchInput,
} from "./searchField.styled";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { Form } from "react-router-dom";
import { SEARCH_ROUTE } from "../../../utils/routes_consts";

const SearchField = ({ opened, setOpenSearch }) => {
  const [searchRequest, setSearchRequest] = useState("");
  const searchFieldRef = useRef();
  const inputFieldRef = useRef();
  const closeSearchFieldHandler = () => setOpenSearch(false);
  useClickOutside(searchFieldRef, opened, closeSearchFieldHandler);

  const searchRequestHandler = (event) => {
    setSearchRequest(event.target.value);
  };

  const onSubmitHandler = (event) => {
    setOpenSearch(false);
    setSearchRequest("");
  };

  const onKeyDownHandler = (event) => {
    if (event.code === "Enter") {
      setOpenSearch(false);
      setSearchRequest("");
    }
  };

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
        <Form
          action={SEARCH_ROUTE}
          onSubmit={onSubmitHandler}
          onKeyDown={onKeyDownHandler}
        >
          <SearchButton type="submit">
            <SearchOutlinedIcon />
          </SearchButton>
          <SearchInput
            placeholder="What do you wont to find?"
            ref={inputFieldRef}
            type="search"
            value={searchRequest}
            onChange={searchRequestHandler}
          />
          <CloseIcon onClick={closeSearchFieldHandler} />
        </Form>
      </SearchFieldContainer>
    </SearchFieldWrapper>
  );
};

export default SearchField;
