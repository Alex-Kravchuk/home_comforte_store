import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { ProductService } from "../../../api/product/productService";

import { Container } from "../../../styles/globalStyles";

import {
  PageTitle,
  AllWrapper,
  CategoryImg,
  CategoryCard,
  AllContainer,
  CategoryName,
  PageSubtitle,
  CategoriesList,
  PageTitleContainer,
} from "./Category.styled";

const Category = () => {
  const [correctPathParams, setCorrectPathParams] = useState(false);
  const [localData, setLocalData] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, [params]);

  const getCategories = async () => {
    const data = await ProductService.getAllCategories();
    const correctCategoryName = data?.some(
      (menuItem) => menuItem.name.toLowerCase() === params.category_name
    );

    if (correctCategoryName) {
      setCorrectPathParams(true);
    } else {
      navigate("*");
    }

    const currentCategory = data.find(
      (category) => category.name.toLowerCase() === params.category_name
    );

    setLocalData(currentCategory);
  };

  console.log(params, "THIS IS PARAMS");
  return (
    <AllWrapper>
      <Container>
        <AllContainer>
          <PageTitleContainer>
            <PageTitle>All {localData.name}</PageTitle>
            <PageSubtitle>
              You’re in the designer’s seat with thousands of ways to customize.
              Our configurations range from sofas to storage sleepers, chaise
              sectionals to accent chairs, and more.
            </PageSubtitle>
          </PageTitleContainer>

          <CategoriesList>
            {correctPathParams &&
              localData.types.map((type) => (
                <CategoryCard key={type.name}>
                  <Link to="all-sofas">
                    <CategoryImg
                      src={process.env.REACT_APP_API_URL + type.preview}
                    />
                    <CategoryName>
                      {type.name}
                      <ArrowRightAltIcon />
                    </CategoryName>
                  </Link>
                </CategoryCard>
              ))}
          </CategoriesList>
        </AllContainer>
      </Container>
    </AllWrapper>
  );
};

export default Category;
