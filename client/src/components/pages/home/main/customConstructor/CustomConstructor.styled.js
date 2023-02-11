import styled from "styled-components";

export const CustomConstructorWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #f9faf7;
`;

export const CustomConstructorContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
