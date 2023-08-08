import styled from "styled-components";

// ANC

export const ANCModalWrapper = styled.div``;

export const ANCContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  margin: 30px 0 30px 0;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const ANCAddContainer = styled.div`
  cursor: pointer;
  display: inline-flex;

  align-items: center;
`;
export const ANCHideContainer = styled.div`
  cursor: pointer;
  display: inline-flex;

  align-items: center;
`;
export const ANCIcon = styled.div``;
export const ANCText = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding-left: 15px;
`;
