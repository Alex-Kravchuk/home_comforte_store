import styled from "styled-components";

export const CellTypeWrapper = styled.div``;
export const CellTypeContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 3px 0 0 3px;
  font-size: 0;
`;

export const Cell = styled.li`
  height: 100px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: -1px -1px 0 0;
  width: 25%;
  border: 1px solid lightgray;
  vertical-align: top;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s ease;
  position: relative;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:nth-child(4n + 4) {
    border-radius: 0 5px 5px 0;
  }

  &:nth-child(4n + 5) {
    border-radius: 5px 0 0 5px;
  }

  &:hover {
    box-shadow: 0 0 3px 0.5px rgba(21, 21, 21, 0.1),
      0 1px 10px 0 rgba(21, 21, 21, 0.1);
  }

  ${({ selected }) =>
    selected &&
    `
    background: rgba(0, 0, 0, 0.035);
    box-shadow: 0 0 3px 0.5px rgba(21, 21, 21, 0.1),
    0 1px 10px 0 rgba(21, 21, 21, 0.1);
    
    &:hover {
      background: rgba(0, 0, 0, 0.035);
    }
    `}
`;

export const CellTitle = styled.div`
  text-align: center;
`;
export const CellPrice = styled.div`
  text-align: center;
  font-weight: 500;
`;
