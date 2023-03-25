import React from "react";

import { useGetWindowSize } from "../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

import CollectionsSwiper from "./swiper/CollectionsSwiper";
import { Container } from "../../../../../styles/globalStyles";

import {
  TitleContainer,
  CollectionsWrapper,
  FetchButtonContainer,
  CollectionTitleContainer,
} from "./Collections.styled";

const Collections = () => {
  const viewport = useGetWindowSize();
  const smallScreen = viewport.width < viewport_sizes.ml;
  return (
    <CollectionsWrapper>
      <Container>
        <CollectionTitleContainer>
          <TitleContainer>Our seating collections</TitleContainer>
          {!smallScreen && (
            <FetchButtonContainer>Show all of collections</FetchButtonContainer>
          )}
        </CollectionTitleContainer>
      </Container>
      <CollectionsSwiper />
      {smallScreen && (
        <Container>
          <FetchButtonContainer bottomPosition={true}>
            Show all of collections
          </FetchButtonContainer>
        </Container>
      )}
    </CollectionsWrapper>
  );
};

export default Collections;
