import React from "react";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import {
  PLIImg,
  PLIName,
  PLIWrapper,
  PLIContainer,
  PLIInterface,
  PLIAdditionalInfo,
  PLIInterfaceContainer,
  PLIAdditionalInfoBlock,
  PLIAdditionalInfoContainer,
  PLIAdditionalInfoBlockLable,
  PLIAdditionalInfoBlockContent,
  PLIImgContainer,
} from "./ProductListItem.styled";
import { Tooltip } from "antd";

const ProductListItem = ({ name, category, type, subtype, img }) => {
  return (
    <PLIWrapper>
      <PLIContainer>
        <PLIInterfaceContainer>
          <PLIName>{name}</PLIName>
          <PLIInterface>
			<Tooltip title="Edit" placement="left">
			<ModeEditOutlineOutlinedIcon />
			</Tooltip>
      
          </PLIInterface>
        </PLIInterfaceContainer>
        <PLIAdditionalInfoContainer>
          <PLIAdditionalInfo>
            <PLIAdditionalInfoBlock>
              <PLIAdditionalInfoBlockLable>
                category:
              </PLIAdditionalInfoBlockLable>
              <PLIAdditionalInfoBlockContent>
                {category}
              </PLIAdditionalInfoBlockContent>
            </PLIAdditionalInfoBlock>
            <PLIAdditionalInfoBlock>
              <PLIAdditionalInfoBlockLable>type:</PLIAdditionalInfoBlockLable>
              <PLIAdditionalInfoBlockContent>
                {type}
              </PLIAdditionalInfoBlockContent>
            </PLIAdditionalInfoBlock>
            <PLIAdditionalInfoBlock>
              <PLIAdditionalInfoBlockLable>
                subtype:
              </PLIAdditionalInfoBlockLable>
              <PLIAdditionalInfoBlockContent>
                {subtype}
              </PLIAdditionalInfoBlockContent>
            </PLIAdditionalInfoBlock>
          </PLIAdditionalInfo>
          <PLIImgContainer>
            <PLIImg src={img} />
          </PLIImgContainer>
        </PLIAdditionalInfoContainer>
      </PLIContainer>
    </PLIWrapper>
  );
};

export default ProductListItem;
