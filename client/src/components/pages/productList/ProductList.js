import React from "react";
import { PLContainer, PLWrapper } from "./ProductList.styled";
import { Container } from "../../../styles/globalStyles";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const params = useParams();
  console.log("params", params);

  return (
    <PLWrapper>
      <Container>
        <PLContainer>
          <h2>THIS IS A PRODUCT LIST PAGE: </h2>
          <div>
            category_name: <strong>{params.category_name}</strong>
          </div>
          <div>
            type_name: <strong>{params.type_name}</strong>
          </div>
          <div>
            subtype_name: <strong>{params.subtype_name}</strong>
          </div>
        </PLContainer>
      </Container>
    </PLWrapper>
  );
};

export default ProductList;
