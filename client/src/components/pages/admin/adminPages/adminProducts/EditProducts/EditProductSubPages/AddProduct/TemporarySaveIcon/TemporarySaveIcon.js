import React from "react";

import { Tooltip } from "antd";

import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import {
  TSIButton,
  TSIWrapper,
  TSIContainer,
  TSIErrorText,
  TSIErrorContainer,
} from "./TemporarySaveIcon.styled";


const TemporarySaveIcon = ({
  form,
  error,
  temporarySaveFlag,
  resetDimensionHandler,
  temporarilySaveHandler,
}) => {
  

  const buttonText = temporarySaveFlag
    ? "Temporarily saved"
    : "Temporarily save the entered values";

  const onClickHandler = () => {
    if (temporarySaveFlag) {
      temporarilySaveHandler(false);
    }
  };

  const resetFieldsHandler = () => {
    temporarilySaveHandler(false);
    form.resetFields();
    resetDimensionHandler();
  };

  return (
    <TSIWrapper>
      <TSIErrorContainer error={error}>
        <TSIErrorText>
          You have not filled in all the information in this block
        </TSIErrorText>
      </TSIErrorContainer>
      <TSIContainer>
        <Tooltip
          title="You can temporarily save the entered values for the next part of the new product setup. You can reset it at any time"
          placement="top"
        >
          <TSIButton
            onClick={onClickHandler}
            disabled={temporarySaveFlag}
            htmlType="submit"
          >
            {buttonText}
            {temporarySaveFlag ? (
              <BookmarkAddedOutlinedIcon />
            ) : (
              <BookmarkAddOutlinedIcon />
            )}
          </TSIButton>
        </Tooltip>
        {temporarySaveFlag && (
          <Tooltip title="Reset the entred values" placement="top">
            <TSIButton onClick={resetFieldsHandler} htmlType="submit">
              <RemoveCircleOutlineOutlinedIcon />
            </TSIButton>
          </Tooltip>
        )}
      </TSIContainer>
    </TSIWrapper>
  );
};

export default TemporarySaveIcon;
