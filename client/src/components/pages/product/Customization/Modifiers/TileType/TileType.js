import React from "react";

import {
  Tile,
  TileImg,
  TileDescr,
  TilePrice,
  TileTitle,
  TileTypeWrapper,
  TileTypeContainer,
  TileDescrContainer,
  TileTitleContainer,
} from "./TileType.styled";

const TileType = ({ data }) => {
  return (
    <TileTypeWrapper>
      <TileTypeContainer>
        {data.map((item) => (
          <Tile key={item.id}>
            <TileTitleContainer>
              <TileTitle>{item.title}</TileTitle>
              <TilePrice>{item.price}</TilePrice>
            </TileTitleContainer>

            <TileDescrContainer>
              {item.img && <TileImg src={item.img} alt={item.title} />}
              {item.descr && <TileDescr>{item.descr}</TileDescr>}
            </TileDescrContainer>
          </Tile>
        ))}
      </TileTypeContainer>
    </TileTypeWrapper>
  );
};

export default TileType;
