import React, { useEffect, useState } from "react";
import SearchField from "../../../../../searchField/SearchField";
import { SubPageContainer, SubPageWrapper } from "../TabSubPages.styled";
import OverviewCollapse from "./OverviewCollapse/OverviewCollapse";
import { useDispatch, useSelector } from "react-redux";
import { ProductService } from "../../../../../../../../api/product/productService";
import { saveUpdatedMenuData } from "../../../../../../../../redux/loading/loadingSlice";

const Overview = () => {
  const [loading, setLoading] = useState(false);
  const { data: menuData } = useSelector((state) => state.menuData);
  const [categories, setCategories] = useState([]);
  const [dataSought, setDataSought] = useState([]);
  const [searchNoMatches, setSearchNoMatches] = useState(false);
  const dispatch = useDispatch();

  const [searchInputValue, setSearchInputValue] = useState("");

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
    console.log("useEffetc before unmounted");
    return () => {
      prepareDataToRequest(categories);
    };
  }, [categories]);

  useEffect(() => {
    const dataSoughtHandler = () => {
      // debugger;
      if (!searchInputValue) {
        setDataSought(menuData);
        setSearchNoMatches(false);
        return;
      }

      const filteredData = menuData.filter((item) =>
        item.name.toLowerCase().includes(searchInputValue.toLowerCase())
      );
      // debugger
      if (filteredData.length === 0 && searchInputValue) {
        setSearchNoMatches(true);
        return;
      } else {
        setSearchNoMatches(false);
      }

      setDataSought(filteredData);
    };

    dataSoughtHandler();
  }, [searchInputValue]);

  // console.log("categories", categories);

  return (
    <SubPageWrapper>
      <SearchField
        inputHandler={setSearchInputValue}
        searchInputValue={setSearchInputValue}
      />
      <SubPageContainer>
        <OverviewCollapse
          changeDataHandler={setCategories}
          dataSought={dataSought}
          searchNoMatches={searchNoMatches}
        />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default Overview;
