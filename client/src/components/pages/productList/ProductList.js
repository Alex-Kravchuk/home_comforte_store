import React, { useEffect } from "react";
import { PLContainer, PLWrapper } from "./ProductList.styled";
import { Container } from "../../../styles/globalStyles";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductService } from "../../../api/product/productService";

const ProductList = () => {
  const params = useParams();
  const navigate = useNavigate();

  // console.log("params", params);

  useEffect(() => {
    checkCorrectPath();
  }, [params]);

  const checkCorrectPath = async () => {
    const { category_name, type_name, subtype_name } = params;
    const categories = await ProductService.getAllCategories();

    const correctCategory = categories.find(
      (category) => category.name.toLowerCase() === category_name
    );

    if (!correctCategory) {
      return navigate("*");
    }

    const correctType = correctCategory.types.find(
      (type) =>
        type.name.toLowerCase() === type_name ||
        "all-" + type.name.toLowerCase() === type_name
    );

    // if path = .../living/all-sofas we do not make redirect to 404 page
    const allTypePath =
      "all-" + correctType?.name.toLowerCase() === type_name && !subtype_name;
    if (allTypePath) {
      return;
    }

    if (!correctType) {
      return navigate("*");
    }

    const correctSubType = correctType.subTypes.find(
      (subtype) =>
        subtype.name.toLowerCase() === subtype_name.split("-").join(" ")
    );

    if (!correctSubType) {
      return navigate("*");
    }
  };

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
