import React from "react";
import {
  SubPageContainer,
  SubPageWrapper,
} from "../../AdminProducts.styled";
import SearchField from "../../../../searchField/SearchField";
import { List } from "antd";
import { adminProductListMOCK } from "../../../../../../../assets/mock/adminProductListMOCK";
import ProductListItem from "../ProductListItem/ProductListItem";

const Overview = () => {
  return (
    <SubPageWrapper>
      <SubPageContainer>
        <SearchField />
        <List
          size="large"
          bordered
          dataSource={adminProductListMOCK}
          renderItem={(item) => (
            <List.Item>
              <ProductListItem
                key={item.id}
                name={item.name}
                category={item.category}
                type={item.type}
                subtype={item.supType}
                img={item.img}
              />
            </List.Item>
          )}
        />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default Overview;
