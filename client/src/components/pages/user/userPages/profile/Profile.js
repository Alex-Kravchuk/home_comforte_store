import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NameWidget from "../widgets/nameWidget/NameWidget";
import OrderWidget from "../widgets/orderWidget/OrderWidget";
import ContactWidget from "../widgets/contactWidget/ContactWidget";
import AdditionalInfoWidget from "../widgets/additionalInfoWidget/AdditionalInfoWidget";

import {
  PGIOrders,
  PGIContacts,
  ProfileWrapper,
  ProfileContainer,
  ProfileGlobalInfo,
} from "./Profile.styled";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileGlobalInfo>
          <PGIContacts>
            <NameWidget userData={userData} />
            <ContactWidget userData={userData} />
          </PGIContacts>
          <PGIOrders>
            <OrderWidget />
          </PGIOrders>
        </ProfileGlobalInfo>
        <Outlet />
        <AdditionalInfoWidget />
      </ProfileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
