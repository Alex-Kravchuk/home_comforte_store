import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

export const mobileFooterLinks_leftSide_config = [
  {
    id: "1",
    title: "Company",
    subTitles: ["About Us"],
  },
  {
    id: "2",
    title: "Visit Us",
    subTitles: ["All locations"],
  },
  {
    id: "3",
    title: "Design Guides",
    subTitles: ["Our seating collections", "AR: See it in your space"],
  },
  {
    id: "4",
    title: "Support",
    subTitles: ["Link 1", "Link 2"],
  },
];

export const rightSideConfig = [
  {
    id: 1,
    title: "Live chat",
    subTitle: "Online now",
    icon: <ChatOutlinedIcon />,
  },

  {
    id: 2,
    title: "Call",
    subTitle: "+380986573412",
    icon: <SmartphoneOutlinedIcon />,
  },
  {
    id: 3,
    title: "Email",
    subTitle: "Send us a message",
    icon: <MarkEmailReadOutlinedIcon />,
  },
];
