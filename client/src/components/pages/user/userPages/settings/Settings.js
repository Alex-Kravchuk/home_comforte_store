import React from "react";
import { Outlet } from "react-router-dom";

import { SettingsWrapper, SettingsContainer } from "./Settings.styled";



const Settings = () => {
  return (
    <SettingsWrapper>
      <SettingsContainer>
        <Outlet />
      </SettingsContainer>
    </SettingsWrapper>
  );
};

export default Settings;
