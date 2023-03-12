import styled from "styled-components";

export const CustomConstructorWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #f9faf7;
`;

export const CustomConstructorContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
`;
