import React from "react";

import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import {
  TSIButton,
  TSIContainer,
  TSIErrorContainer,
  TSIErrorText,
  TSIWrapper,
} from "./TemporarySaveIcon.styled";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { resetGeneralInfoFields } from "../../../../../../../../../redux/productAdding/productAddingSlice";

const TemporarySaveIcon = ({
  form,
  error,
  temporarySaveFlag,
  temporarilySaveHandler,
}) => {
  const dispatch = useDispatch();

  const buttonText = temporarySaveFlag
    ? "Temporarily saved"
    : "Temporarily save the entered values";

  const onClickHandler = () => {
    if (temporarySaveFlag) {
      temporarilySaveHandler(false);
    }
  };

  const resetFieldsHandler = () => {
    dispatch(resetGeneralInfoFields());
    temporarilySaveHandler(false);
    form.resetFields();
  };

  // console.log("error dimenison", error);
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
