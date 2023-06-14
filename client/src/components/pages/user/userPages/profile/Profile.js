import React from "react";
import { ProfileContainer, ProfileWrapper } from "./Profile.styled";

const Profile = () => {
  console.log("====================================");
  console.log("render proflei");
  console.log("====================================");
  return (
    <ProfileWrapper>
      <ProfileContainer>profile page</ProfileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
