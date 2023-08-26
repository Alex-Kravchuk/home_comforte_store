import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import OverviewCollapse from "./OverviewCollapse/OverviewCollapse";

import { ProductService } from "../../../../../../../../api/product/productService";
import { saveUpdatedMenuData } from "../../../../../../../../redux/loading/loadingSlice";
import { SubPageContainer, SubPageWrapper } from "../../../AdminProducts.styled";


const Overview = () => {
  const { data: menuData } = useSelector((state) => state.menuData);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  /**
   * @function prepareDataToRequest
   * I separate each category from the general categories object
   * and must make a request to the api for each route (category, type and subtype)
   */
  const prepareDataToRequest = async () => {
    console.log("updated data", categories);

    try {
      const typesForRequest = [];
      const subtypesForRequest = [];

      categories.forEach((category) => {
        category.types.forEach((type) => {
          typesForRequest.push(type);
        });
      });

      typesForRequest.forEach((type) => {
        type.subTypes.forEach((subtype) => {
          subtypesForRequest.push(subtype);
        });
      });

      const response = await ProductService.updateCategories(categories);
      const updatedData = response.data.length === 0 ? menuData : response.data;
      dispatch(saveUpdatedMenuData(updatedData));
    } catch (error) {
      dispatch(saveUpdatedMenuData(menuData));
    }
  };

  useEffect(() => {
    return () => {
      prepareDataToRequest(categories);
    };
  }, [categories]);

  return (
    <SubPageWrapper>
      <SubPageContainer>
        <OverviewCollapse changeDataHandler={setCategories} />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default Overview;
