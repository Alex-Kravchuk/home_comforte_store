import styled from "styled-components";

// CTM = CellTypeModifier

export const CTMWrapper = styled.div``;

export const CTMContainer = styled.div``;

export const CTMList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;
export const CTMAddNewWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 10px 0;
`;

export const CTMAddNewContainer = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  background: rgba(0, 0, 0, 0.12);
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: all 0.2s ease;

  svg {
    transition: all 0.2s ease;
  }

  &:hover {
    svg {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  &:active {
    top: 2px;
  }
`;

export const CTMListItem = styled.div`
  position: relative;
  width: 150px;
  height: 80px;
  padding: 10px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ editModeOn }) => editModeOn && "end"};
  margin: 0 10px 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 3px 0.5px rgba(21, 21, 21, 0.1),
    0 1px 10px 0 rgba(21, 21, 21, 0.1);

  border: 1px solid rgba(0, 0, 0, 0.25);

  input:last-child {
    margin-top: 5px;
  }

  img {
    width: 70px;
  }

  &:hover > div:first-child {
    visibility: visible;
    opacity: 1;
  }

  ${({ error }) =>
    error &&
    `
  box-shadow: 0 0 3px 0.5px red,
  0 1px 10px 0 rgba(21, 21, 21, 0.1);
 	 `}
`;

export const CTMInterfaceIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease;

  svg {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  svg:first-child {
    margin: 5px 0 0 5px;
  }

  svg:last-child {
    margin: 5px 5px 0 0;
  }

  svg:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const CTMText = styled.div`
  font-size: 16px;
  text-align: center;
`;
