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
  display: inline-block;
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
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const CellTitle = styled.div`
  text-align: center;
  margin-top: 25px;
`;
export const CellPrice = styled.div`
  text-align: center;
`;
