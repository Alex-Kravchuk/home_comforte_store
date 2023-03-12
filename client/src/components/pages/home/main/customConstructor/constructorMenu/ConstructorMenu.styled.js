import styled from "styled-components";

export const ConstructorMenuWrapper = styled.div`
  flex: 1 0 33.3%;
  height: auto;

  @media (max-width: 1024px) {
    order: 2;
  }
  padding: 15px 0;
`;

export const ConstructorMenuContainer = styled.div`
  width: auto;
  height: 100%;
`;
export const ConstructorMenuTitle = styled.div`
  font-size: 16px;
  color: #888888;
  padding: 15px 0;
`;
export const ConstructorMenuSubTitle = styled.h2`
  font-size: 22px;
  color: #787878;
`;
export const ConstructorMenuOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const ConstructorMenuOptionsItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 15px;
  width: 150px;
  margin: 10px 0;

  @media (max-width: 320px) {
    width: auto;
  }
`;
export const ConstructorMenuOptionsItemIconContainer = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin-right: 25px;
  background: ${({ selected }) => (selected ? "#c6ccc2" : "transparent")};

  @media (max-width: 1024px) {
    margin-right: 10px;
  }

  @media (max-width: 320px) {
    margin-right: 25px;
  }
`;

export const ConstructorMenuOptionsItemIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const ConstructorMenuOptionsItemTitle = styled.div`
  color: #808080;
`;
