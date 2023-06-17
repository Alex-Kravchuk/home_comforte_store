import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  OAIBlock,
  OAIBtnContainer,
  OAIFooter,
  OAILabel,
  OAIValue,
  OPBlock,
  OPContainer,
  OPImage,
  OPImgNameContainer,
  OPName,
  OPNumber,
  OPPriceBlock,
  OPPricePerUnit,
  OPTotalPrice,
  OrderAdditionalInfo,
  OrderCloseBtn,
  OrderContainer,
  OrderHeader,
  OrderInfo,
  OrderProductList,
  OrderWrapper,
} from "./Order.styled";
import {
  WidgetTitle,
  WidgetTitleContainer,
  WidgetWrapper,
} from "../widgets/Widget.styled";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import bed_img from "../../../../../assets/img/product_list/bed.jpg";
import chair_img from "../../../../../assets/img/product_list/chair.jpg";
import { Button, Tag } from "antd";
import { orderStatusConfig } from "../widgets/orderWidget/orderStatusConfig";

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const closePageHandler = () => navigate("..");

  return (
    <OrderWrapper>
      <WidgetWrapper>
        <OrderContainer>
          <OrderHeader>
            <WidgetTitleContainer>
              <WidgetTitle>
                Order number <strong>{id}</strong>
              </WidgetTitle>
            </WidgetTitleContainer>

            <OrderCloseBtn onClick={closePageHandler}>
              <CloseOutlinedIcon />
            </OrderCloseBtn>
          </OrderHeader>
          <OrderInfo>
            <OrderProductList>
              <OPContainer>
                <OPBlock>
                  <OPImgNameContainer>
                    <OPImage src={bed_img} />
                    <OPName>Rowan Fully Upholstered Canopy Bed</OPName>
                  </OPImgNameContainer>
                </OPBlock>
                <OPPriceBlock>
                  <OPPricePerUnit>$2031</OPPricePerUnit>
                  <OPNumber>x 2</OPNumber>
                  <OPTotalPrice>$4061</OPTotalPrice>
                </OPPriceBlock>
              </OPContainer>

              <OPContainer>
                <OPBlock>
                  <OPImgNameContainer>
                    <OPImage src={chair_img} />
                    <OPName>Oslo Leather Petite Chair</OPName>
                  </OPImgNameContainer>
                </OPBlock>
                <OPPriceBlock>
                  <OPPricePerUnit>$2031</OPPricePerUnit>
                  <OPNumber>x 2</OPNumber>

                  <OPTotalPrice>$4061</OPTotalPrice>
                </OPPriceBlock>
              </OPContainer>
            </OrderProductList>
            <OrderAdditionalInfo>
            <OAIBlock>
                <OAILabel>Order date:</OAILabel>
                <OAIValue>12-11-2020</OAIValue>
              </OAIBlock>
              <OAIBlock>
                <OAILabel>Order time:</OAILabel>
                <OAIValue>08:50</OAIValue>
              </OAIBlock>
              <OAIBlock>
                <OAILabel>Delivery address:</OAILabel>
                <OAIValue>Ukraine, Lviv, Doroshenka Str. 45</OAIValue>
              </OAIBlock>
              <OAIBlock>
                <OAILabel>Delivery date:</OAILabel>
                <OAIValue>02-12-2021</OAIValue>
              </OAIBlock>
              <OAIBlock>
                <OAILabel>Contact phone:</OAILabel>
                <OAIValue>+38097654639</OAIValue>
              </OAIBlock>
              <OAIBlock>
                <OAILabel>Deliver at:</OAILabel>
                <OAIValue>13:00</OAIValue>
              </OAIBlock>
              <OAIBlock>
                <OAILabel>Status:</OAILabel>
                <OAIValue>
                  <Tag color={orderStatusConfig["in processing"]}>
                    in processing
                  </Tag>
                </OAIValue>
              </OAIBlock>
              <OAIFooter>
                <OAIValue>Total price: ${12122}</OAIValue>
              </OAIFooter>
              <OAIBtnContainer>
                <Button>Edit</Button>
                <Button danger>Cancel order</Button>
              </OAIBtnContainer>
            </OrderAdditionalInfo>
          </OrderInfo>
        </OrderContainer>
      </WidgetWrapper>
    </OrderWrapper>
  );
};

export default Order;
