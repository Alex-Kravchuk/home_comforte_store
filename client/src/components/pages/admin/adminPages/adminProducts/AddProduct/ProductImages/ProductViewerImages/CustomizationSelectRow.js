import React from "react";
import {
  InfoIconContainer,
  PVIContentRow,
  SelectContainer,
  SelectLabelContainer,
} from "./ProductViewerImages.styled";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Select, Tooltip } from "antd";

const CustomizationSelectRow = ({
  name,
  items,
  sizeLarge,
  noAffectToDisplay,
  optionsOnChangeHandler,
}) => {
  return (
    <PVIContentRow>
      <div>{name}</div>

      <SelectContainer>
        {noAffectToDisplay && (
          <Tooltip title="This modifier does not affect the display of the product">
            <InfoIconContainer>
              <InfoOutlinedIcon />
            </InfoIconContainer>
          </Tooltip>
        )}
        <Select
          onChange={(value) => optionsOnChangeHandler(name, value)}
          defaultValue={{
            value: items.find((item) => item.defaultMarker),
            label: (
              <SelectLabelContainer>
                <span>{items.find((item) => item.defaultMarker).title}</span>
                <span>
                  {items.find((item) => item.defaultMarker).defaultMarker
                    ? "default"
                    : ""}
                </span>
              </SelectLabelContainer>
            ),
          }}
          placeholder="Choose customization option"
          size={sizeLarge ? "large" : "medium"}
          options={items.map((item) => ({
            value: item.title,
            label: (
              <SelectLabelContainer>
                <span>{item.title}</span>
                <span>{item.defaultMarker ? "default" : ""}</span>
              </SelectLabelContainer>
            ),
          }))}
        />
      </SelectContainer>
    </PVIContentRow>
  );
};

export default CustomizationSelectRow;
