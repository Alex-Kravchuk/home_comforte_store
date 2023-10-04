import React from "react";

import { UserOutlined } from "@ant-design/icons";

import {
  ReviewImg,
  ReviewImgNameContainer,
  ReviewProductName,
  ReviewUserAvatarContainer,
  ReviewUserImg,
} from "./Review.styled";
import { Avatar } from "antd";

const ReviewHeader = ({ review, standartReview = true }) => {
  /**
   * @param standartReview
   * is a flag that explains that feedback is provided in a standard form,
   * like feedback from any user on a product page
   * if standartReview = false means that the review is in a format for one user only,
   *  i.e. the review is displayed on the profile page as a review left by that user
   */

  const { product_name, product_img, user_name, user_img } = review;

  const userAvatar = user_img ? (
    <ReviewUserImg src={user_img} />
  ) : (
    <Avatar size={64} icon={<UserOutlined />} />
  );

  return (
    <ReviewImgNameContainer>
      {standartReview ? (
        <>
          <ReviewImg src={product_img} />
          <ReviewProductName>{product_name}</ReviewProductName>
        </>
      ) : (
        <>
          <ReviewUserAvatarContainer>
            {userAvatar}
          </ReviewUserAvatarContainer>

          <ReviewProductName>{user_name}</ReviewProductName>
        </>
      )}
    </ReviewImgNameContainer>
  );
};

export default ReviewHeader;
