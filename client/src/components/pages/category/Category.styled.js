import styled from "styled-components";

export const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllContainer = styled.div``;

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PageTitle = styled.div`
  text-align: center;
  font-size: 36px;
  margin: 15px 0;
`;

export const PageSubtitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`;

export const CategoriesList = styled.div`
  padding: 25px 0;
`;

export const CategoryCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 10px;

  svg {
    transition: all 0.2s ease;
    position: relative;
    left: 0px;
  }

  &:hover {
    svg {
      position: relative;
      left: 5px;
    }
  }
`;

export const CategoryName = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  margin-top: 10px;
`;

export const CategoryImg = styled.img`
  width: 100px;
`;
