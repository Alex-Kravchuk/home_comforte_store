import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ProductService } from "../../../api/product/productService";

const AllCategories = () => {
  const [correctPathParams, setCorrectPathParams] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

//   TODO create a NotFound 404 page

  useEffect(() => {
    getCategories();
  }, []);

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
  };

  console.log(params, "THIS IS PARAMS");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {correctPathParams ? (
        <span>THIS IS A CATEGORY PAGE</span>
      ) : (
        <Spin size="large" tip="Loading..." />
      )}
    </div>
  );
};

export default AllCategories;
