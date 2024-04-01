import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductService } from "../../../api/product/productService";
import ProductListHeader from "./ProductListHeader/ProductListHeader";

import List from "./List/List";
import Filters from "./Filters/Filters";

import { Container } from "../../../styles/globalStyles";
import { PLContainer, PLMainSection, PLWrapper } from "./ProductList.styled";
import { useGetWindowSize } from "../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import FiltersDrawer from "./Filters/FiltersDrawer";

const ProductList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const viewport = useGetWindowSize();

  const [headerTitle, setHeaderTitle] = useState("");
  const [openFiltersDrawer, setOpenFiltersDrawer] = useState(false);

  const smallScreen = viewport.width < viewport_sizes.xl;

  useEffect(() => {
    checkCorrectPath();
    makeHeaderTitle();
  }, [params]);

  const makeHeaderTitle = () => {
    const paramsValues = Object.values(params);
    let lastOneParams = paramsValues[paramsValues.length - 1].split("-");

    if (lastOneParams.length === 1) {
      setHeaderTitle(
        lastOneParams[0].charAt(0).toUpperCase() + lastOneParams[0].slice(1)
      );

      return;
    }

    if (lastOneParams.length > 1) {
      lastOneParams[0] =
        lastOneParams[0].charAt(0).toUpperCase() + lastOneParams[0].slice(1);

      setHeaderTitle(lastOneParams.join(" "));
    }
  };

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
          <ProductListHeader
            title={headerTitle}
            onOpenDrawer={setOpenFiltersDrawer}
          />
          <PLMainSection>
            {!smallScreen && <Filters />}
            <FiltersDrawer
              open={openFiltersDrawer}
              onCloseDrawer={setOpenFiltersDrawer}
            >
              <Filters />
            </FiltersDrawer>
            <List />
          </PLMainSection>
        </PLContainer>
      </Container>
    </PLWrapper>
  );
};

export default ProductList;
