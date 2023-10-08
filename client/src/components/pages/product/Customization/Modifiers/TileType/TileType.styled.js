import styled from "styled-components";

export const TileTypeWrapper = styled.div``;
export const TileTypeContainer = styled.div`
  display: flex;
`;

export const Tile = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: black;
    border: 1px solid gray;
  }
`;

export const TileTitleContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70px;

  box-sizing: border-box;
`;
export const TileDescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TileTitle = styled.div`
  text-align: center;
  font-weight: 600;
`;
export const TilePrice = styled.div`
  text-align: center;

  font-size: 14px;
`;
export const TileImg = styled.img`
  width: 95px;
  height: 60px;
  padding: 10px;

  @media (max-width: 425px) {
    width: 75px;
    height: 40px;
  }
`;
export const TileDescr = styled.div`
  text-align: justify;
  font-size: 12px;
  padding: 10px;
`;
