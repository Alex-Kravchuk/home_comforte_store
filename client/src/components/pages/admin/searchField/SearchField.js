import React from "react";
import { SearchFieldContainer, SearchFieldWrapper } from "./SearchField.styled";
import { Input } from "antd";

const { Search } = Input;

// TODO
// to change height of search button

const SearchField = ({loading}) => {
  return (
    <SearchFieldWrapper>
      <SearchFieldContainer>
        <Search placeholder="Search for product ID, categories, types or something" loading={loading} size="large" />
      </SearchFieldContainer>
    </SearchFieldWrapper>
  );
};

export default SearchField;
