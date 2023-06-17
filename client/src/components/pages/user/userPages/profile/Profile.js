import React from "react";
import { Outlet } from "react-router-dom";

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

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileGlobalInfo>
          <PGIContacts>
            <NameWidget />
            <ContactWidget />
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
