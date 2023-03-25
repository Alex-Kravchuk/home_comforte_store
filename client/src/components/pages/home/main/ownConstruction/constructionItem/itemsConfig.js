import { ConstructionItemTitle } from "./ConstructionItem.styled";

import WebAR from "../../../../../../assets/img/construction/web-ar.jpg";
import VisitImg from "../../../../../../assets/img/construction/visit.jpg";
import DesignWork from "../../../../../../assets/img/construction/design_work.jpg";

import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";

export const constructionItemsConfig = [
  {
    id: 1,
    title: (
      <ConstructionItemTitle>
        Visit a Home Comforte studio
      </ConstructionItemTitle>
    ),
    description: "See our furniture in an atmosphere of coziness and comfort",
    buttons: {
      redirectBtn1: {
        icon: <AddHomeWorkOutlinedIcon />,
        text: "Find your nearest Home Comforte studio",
      },
      redirectBtn2: {
        icon: <LocationOnOutlinedIcon />,
        text: "See all locations",
      },
    },
    img: VisitImg,
  },
  {
    id: 2,
    title: (
      <ConstructionItemTitle>Get free design services</ConstructionItemTitle>
    ),
    description:
      "Our best designers will help you turn your dream into reality",
    buttons: {
      redirectBtn1: {
        icon: <EventAvailableOutlinedIcon />,
        text: "Book an appointment",
      },
      redirectBtn2: {
        icon: <MarkUnreadChatAltOutlinedIcon />,
        text: "Chat with Design Expert",
      },
    },
    img: DesignWork,
  },
  {
    id: 3,
    title: <ConstructionItemTitle>Place it in your room</ConstructionItemTitle>,
    description: "Try augmented reality technology for lazy shopping",
    buttons: {
      redirectBtn1: {
        icon: <ViewInArOutlinedIcon />,
        text: "Learn more about AR",
      },
      redirectBtn2: {
        icon: <ShoppingBagOutlinedIcon />,
        text: "Try it with some product",
      },
    },
    img: WebAR,
  },
];
