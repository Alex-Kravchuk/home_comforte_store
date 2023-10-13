import React from "react";

import { Tooltip } from "antd";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import {
  DIAddRemoveInterfaceContainer,
  IterfaceContainerItem,
} from "./DimensionInfo.styled";

const AddRemoveInterface = ({
  addNewLabelLineHandler,
  removeTheLastOneLabelLine,
  lineIsNotTheLast,
}) => {
  const removeIconTooltipText = lineIsNotTheLast
    ? "Remove the last one label"
    : "You cannot delete the last line";
	
  return (
    <DIAddRemoveInterfaceContainer>
      <Tooltip title="Add a new label" placement="left">
        <AddCircleOutlineOutlinedIcon onClick={addNewLabelLineHandler} />
      </Tooltip>

      <IterfaceContainerItem lineIsNotTheLast={lineIsNotTheLast}>
        <Tooltip title={removeIconTooltipText} placement="right">
          <RemoveCircleOutlineOutlinedIcon
            onClick={removeTheLastOneLabelLine}
          />
        </Tooltip>
      </IterfaceContainerItem>
    </DIAddRemoveInterfaceContainer>
  );
};

export default AddRemoveInterface;
