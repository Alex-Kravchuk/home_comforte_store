import React from "react";

import { Popconfirm, Tooltip } from "antd";

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
  error,
  form = null,
  resetDataHandler,
  temporarySaveFlag,
  saveDataHandler = null,
  temporarilySaveHandler,
}) => {
  const buttonText = temporarySaveFlag
    ? "Temporarily saved"
    : "Temporarily save the entered values";

  const onClickHandler = () => {
    // when we save data on the tab without form
    if (!form) {
      saveDataHandler();
    }

    if (temporarySaveFlag) {
      temporarilySaveHandler(false);
    }
  };

  const resetFieldsHandler = () => {
    temporarilySaveHandler(false);
    resetDataHandler();

    if (form) {
      form.resetFields();
    }
  };

  return (
    <TSIWrapper>
      <TSIErrorContainer error={error}>
        <TSIErrorText>{error}</TSIErrorText>
      </TSIErrorContainer>
      <TSIContainer>
        <Tooltip
          title="You can temporarily save the entered values for the next part of the new product setup. You can reset it at any time"
          placement="bottom"
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
          <Popconfirm
            title="Reset the entred values?"
            description="Are you sure to delete all data?"
            onConfirm={resetFieldsHandler}
            okText="Ok"
            cancelText="No"
            placement="topLeft"
          >
            <TSIButton htmlType="submit">
              <RemoveCircleOutlineOutlinedIcon />
            </TSIButton>
          </Popconfirm>
        )}
      </TSIContainer>
    </TSIWrapper>
  );
};

export default TemporarySaveIcon;
