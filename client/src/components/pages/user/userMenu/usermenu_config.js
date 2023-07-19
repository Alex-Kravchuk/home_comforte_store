import { Link } from "react-router-dom";

import { SolutionOutlined, SettingOutlined } from "@ant-design/icons";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";

import {
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
  PAYMENT_SETTINGS,
  CONTACTS_SETTINGS,
  PERSONAL_SETTINGS,
} from "../../../../utils/routes_consts";

import { MenuSubItemContainer, MenuSubItemLabel } from "./UserMenu.styled";
export const user_menu_items = [
  {
    key: "profile",
    icon: <SolutionOutlined />,
    label: <Link to={PROFILE_ROUTE}>Profile</Link>,
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
    children: [
      {
        label: (
          <Link to={SETTINGS_ROUTE + "/" + PERSONAL_SETTINGS}>
            <MenuSubItemContainer>
              <ContactPageOutlinedIcon />
              <MenuSubItemLabel>Personal</MenuSubItemLabel>
            </MenuSubItemContainer>
          </Link>
        ),
        key: "personal",
      },
      {
        label: (
          <Link to={SETTINGS_ROUTE + "/" + CONTACTS_SETTINGS}>
            <MenuSubItemContainer>
              <ConnectWithoutContactOutlinedIcon />
              <MenuSubItemLabel>Contacts</MenuSubItemLabel>
            </MenuSubItemContainer>
          </Link>
        ),
        key: "contacts",
      },
      {
        label: (
          <Link to={SETTINGS_ROUTE + "/" + PAYMENT_SETTINGS}>
            <MenuSubItemContainer>
              <PaymentOutlinedIcon />
              <MenuSubItemLabel>Payment</MenuSubItemLabel>
            </MenuSubItemContainer>
          </Link>
        ),
        key: "payment",
      },
    ],
  },
];
