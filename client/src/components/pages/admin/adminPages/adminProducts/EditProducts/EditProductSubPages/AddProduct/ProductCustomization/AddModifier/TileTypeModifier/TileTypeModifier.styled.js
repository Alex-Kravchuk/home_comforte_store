import styled from "styled-components";

export const ModifierBodyWrapper = styled.div`
  margin-top: 25px;
`;

export const TileUploadImgWrapper = styled.div`
  margin-top: 10px;

  .css-0 {
    height: ${({ file }) => (file === null ? 0 : "auto")};
  }
`;

export const TileModifierTitle = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
export const TileModifierDescr = styled.div`
  text-align: justify;
  font-size: 12px;
`;
