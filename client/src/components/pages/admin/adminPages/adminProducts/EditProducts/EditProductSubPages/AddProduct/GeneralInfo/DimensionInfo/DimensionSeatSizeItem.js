import React, { useEffect, useRef, useState } from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import {
  SeatSizeInfoBlock,
  SeatSizeInfoBlockLeft,
  SeatSizeInfoBlockRight,
} from "../../../../../../../../product/Demonstration/ProductDetails/SeatSize/SeatSize.styled";
import { DIInput, DILabelContainer } from "./DimensionInfo.styled";
import { Tooltip } from "antd";

const DimensionSeatSizeItem = ({ dimensionsData, setDataHandler, item }) => {
  const [details, setDetails] = useState(Boolean(item.details));
  const [modifiedItem, setItem] = useState({});

  const [detailsInputValue, setDetailsInputValue] = useState("");

  useEffect(() => {
    const copyItem = Object.assign(item, {});

    setItem(copyItem);
  }, []);

  const addDetailsHandler = () => {
    modifiedItem.details = detailsInputValue;
    setDetails(true);
  };

  const removeDetailsHandler = () => {
    modifiedItem.details = null;
    setDetails(false);
  };

  return (
    <SeatSizeInfoBlock>
      <SeatSizeInfoBlockLeft>
        <DILabelContainer>
          <DIInput placeholder="Dimension label" defaultValue={item.label} />

          <Tooltip
            title={details ? "Remove the details" : "Add the details"}
            placement="top"
          >
            {details ? (
              <RemoveCircleOutlineOutlinedIcon onClick={removeDetailsHandler} />
            ) : (
              <AddCircleOutlineOutlinedIcon onClick={addDetailsHandler} />
            )}
          </Tooltip>
        </DILabelContainer>

        {details && (
          <DIInput
            placeholder="Label details"
            defaultValue={item.details ?? detailsInputValue}
            onChange={(e) => setDetailsInputValue(e.target.value)}
          />
        )}
      </SeatSizeInfoBlockLeft>
      <SeatSizeInfoBlockRight>
        <DIInput placeholder="Dimension value" defaultValue={item.value} />
      </SeatSizeInfoBlockRight>
    </SeatSizeInfoBlock>
  );
};

export default DimensionSeatSizeItem;
