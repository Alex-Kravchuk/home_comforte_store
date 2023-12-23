import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BurstModeOutlinedIcon from "@mui/icons-material/BurstModeOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import { Link } from "react-router-dom";
import {
  ADMIN_NOTIFICATIONS,
  ADMIN_ORDERS,
  ADMIN_OVERVIEW,
  ADMIN_PRODUCTS,
  ADMIN_PRODUCTS_ADD,
  ADMIN_PRODUCTS_CATEGORY,
  ADMIN_PRODUCTS_EDIT,
  ADMIN_SETTINGS,
} from "../../../../utils/routes_consts";

export const adminMenuItems = [
  {
    key: "1",
    label: <Link to={ADMIN_OVERVIEW}>Overview</Link>,
    icon: <RemoveRedEyeOutlinedIcon />,
  },

  {
    key: "2",
    label: "Product menagement",
    type: "divider",
    children: [
      {
        key: "sub1",
        label: (
          <Link to={ADMIN_PRODUCTS + "/" + ADMIN_PRODUCTS_CATEGORY}>
            Categories and type of products
          </Link>
        ),
        icon: <BurstModeOutlinedIcon />,
      },
      {
        key: "sub2",
        label: (
          <Link to={ADMIN_PRODUCTS + "/" + ADMIN_PRODUCTS_ADD}>
            Add new product
          </Link>
        ),
        icon: <NoteAddOutlinedIcon />,
      },
      {
        key: "sub3",
        label: (
          <Link to={ADMIN_PRODUCTS + "/" + ADMIN_PRODUCTS_EDIT}>
            Edit products
          </Link>
        ),
        icon: <EditCalendarOutlinedIcon />,
      },
    ],

    icon: <WeekendOutlinedIcon />,
  },

  {
    key: "3",
    label: <Link to={ADMIN_ORDERS}>Orders</Link>,
    icon: <ProductionQuantityLimitsOutlinedIcon />,
  },

  {
    key: "4",
    label: <Link to={ADMIN_NOTIFICATIONS}>Notifications</Link>,
    icon: <NotificationsOutlinedIcon />,
  },

  {
    key: "5",
    label: <Link to={ADMIN_SETTINGS}>Settings</Link>,
    icon: <SettingsOutlinedIcon />,
  },
];
