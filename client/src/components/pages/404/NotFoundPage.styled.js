import styled from "styled-components";

export const NofFoundWrapper = styled.div`
  width: 50%;
  padding: 170px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  padding-left: 15px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-size: 46px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const SubTitle = styled.div`
  font-size: 18px;
`;

export const RedirectButton = styled.div`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid gray;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }

  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
