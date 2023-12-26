import React, { useEffect } from "react";
import Product from "../Product";
import { Link, useLocation } from "react-router-dom";
import { ButtonContainer, PPPWrapper } from "./PreviewProductPage.styled";
import { Button } from "antd";

const PreviewProductPage = () => {
  const location = useLocation();
  const { generalData, customizationData, previewImages } = location.state;

  console.log('generalData', generalData);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PPPWrapper>
      <h2>This is a preview page for an upcoming product</h2>
      <h4>
        If everything is correct, below you should confirm the addition of the
        product
      </h4>
      <Product previewMode={true} generalData={generalData} />
      <ButtonContainer>
        <Link to="../products/add_new" state={{ confirmed: true }}>
          <Button size="large" type="primary">
            All is well. Confirm
          </Button>
        </Link>
      </ButtonContainer>
    </PPPWrapper>
  );
};

export default PreviewProductPage;
