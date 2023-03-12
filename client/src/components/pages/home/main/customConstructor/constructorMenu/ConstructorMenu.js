import React, { useState } from "react";

import {
  ConstructorMenuContainer,
  ConstructorMenuOptionsItem,
  ConstructorMenuOptionsItemIcon,
  ConstructorMenuOptionsItemIconContainer,
  ConstructorMenuOptionsItemTitle,
  ConstructorMenuOptionsList,
  ConstructorMenuSubTitle,
  ConstructorMenuTitle,
  ConstructorMenuWrapper,
} from "./ConstructorMenu.styled";

import { constructor_menu_config } from "../../../../../../utils/constructor_menu_config";

const ConstructorMenu = ({ selectedItem, setSelectedHandler }) => {
  return (
    <ConstructorMenuWrapper>
      <ConstructorMenuContainer>
        <ConstructorMenuOptionsList>
          {constructor_menu_config.map(({ id, icon, title }) => (
            <ConstructorMenuOptionsItem
              key={id}
              onClick={() => setSelectedHandler(id)}
            >
              <ConstructorMenuOptionsItemIconContainer
                selected={selectedItem === id}
              >
                <ConstructorMenuOptionsItemIcon src={icon} />
              </ConstructorMenuOptionsItemIconContainer>
              <ConstructorMenuOptionsItemTitle>
                {title}
              </ConstructorMenuOptionsItemTitle>
            </ConstructorMenuOptionsItem>
          ))}
        </ConstructorMenuOptionsList>
      </ConstructorMenuContainer>
    </ConstructorMenuWrapper>
  );
};

export default ConstructorMenu;
