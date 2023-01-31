import React from "react";
import {
  SearchButton,
  SearchFieldContainer,
  SearchFieldWrapper,
  SearchInput,
} from "./searchField.styled";

import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import CloseIcon from "@mui/icons-material/Close";

const SearchField = ({ open, setOpenSearch }) => {
  const closeSearchFieldHandler = () => setOpenSearch(false);
  return (
    <SearchFieldWrapper open={open}>
      <SearchFieldContainer>
        <SearchButton>
          <ContentPasteSearchOutlinedIcon />
        </SearchButton>

        <SearchInput placeholder="What do you wont to find?" />
        <CloseIcon onClick={closeSearchFieldHandler} />
      </SearchFieldContainer>
    </SearchFieldWrapper>
  );
};

export default SearchField;
