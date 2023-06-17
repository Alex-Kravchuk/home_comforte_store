import styled from "styled-components";

// CW = ContactWidget

export const CWContainer = styled.div``;

export const CWInfo = styled.div``;

export const CWInfoUpperPart = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
export const CWInfoLowerPart = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const CWInfoLeftSide = styled.div`
  display: flex;
  align-items: start;
`;
export const CWInfoRightSide = styled.div`
  display: flex;
  align-items: start;
`;

export const CWInfoBlock = styled.div`
  padding: 15px 0;
  width: 70%;

  &:last-child {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: 15px;
    width: auto;
  }

  @media (max-width: 350px) {
    font-size: 14px;
  }
`;
export const CWLabel = styled.div`
  color: rgba(128, 128, 128, 0.8);
`;
export const CWValue = styled.div`
  position: relative;
  padding: 8px 0;
`;
