import React, { useEffect, useState } from "react";
import { SearchFieldContainer, SearchFieldWrapper } from "./SearchField.styled";
import { Input } from "antd";

const { Search } = Input;

// TODO
// to change height of search button

const SearchField = ({ inputHandler }) => {
  const [entredData, setEntredData] = useState("");
  const onChangeHandler = (e) => setEntredData(e.target.value);

  useEffect(() => {
    inputHandler(entredData);
  }, [entredData]);
  
  return (
    <SearchFieldWrapper>
      <SearchFieldContainer>
        <Search
          onChange={onChangeHandler}
          defaultValue={entredData}
          placeholder="Search for product ID, categories, types or something"
          size="large"
        />
      </SearchFieldContainer>
    </SearchFieldWrapper>
  );
};

export default SearchField;
