import styled from "styled-components";

export const ListWrapper = styled.div`
  flex: 1 1 80%;
  margin-left: 20px;
  padding-bottom: 20px;

  .ant-card .ant-card-cover > * {
    background: rgba(0, 0, 0, 0.02);
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    margin: 0;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  padding: 10px 0;

  .ant-card-hoverable {
    margin: 0 5px;
    flex: 1 1 30%;
  }
`;

export const ListImg = styled.img`
  width: 80%;
`;

export const ProductPrevImageContainer = styled.div``;
export const ProductPrevDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .ant-rate {
    font-size: 18px;
  }

  .ant-rate .ant-rate-star:not(:last-child) {
    margin-inline-end: 4px;
  }
`;

export const RateBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    margin-right: 5px;
  }
`;
