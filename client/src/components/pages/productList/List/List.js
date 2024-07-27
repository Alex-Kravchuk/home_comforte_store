import React, { useEffect, useState } from "react";

import { Button, Card, Col, Row } from "antd";

import { $host } from "../../../../api";
import ProductPrevImage from "./ProductPrevImage";
import ProductPrevDescription from "./ProductPrevDescription";

import { ListWrapper } from "./List.styled";
import { useLocation } from "react-router-dom";

const List = () => {
  const [listOfProduct, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  useEffect(() => {
    getRequestData();
  }, []);

  const getRequestData = async () => {
    try {
      setLoading(true);
      const { data } = await $host.post("api/furniture/test", {
        viewerId: 1,
        furnitureId: 1,
      });

      setListOfProducts(data ?? []);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ListWrapper>
      <Row gutter={16}>
        {listOfProduct.map(({ id, name, price, previewImg, rating }) => (
          <Col span={8} key={id}>
            <Card
              loading={loading}
              hoverable
              cover={<ProductPrevImage imgSrc={previewImg} loading={loading} />}
            >
              <Card.Meta
                title={name}
                description={
                  <ProductPrevDescription price={price} rating={rating} />
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </ListWrapper>
  );
};

export default List;
