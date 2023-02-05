import HomeImg_desktop_1 from "../assets/img/mainScreen/home_desktop_1.jpg";
import HomeImg_mobile_1 from "../assets/img/mainScreen/home_mobile_1.jpg";
import HomeImg_tablet_1 from "../assets/img/mainScreen/home_tablet_1.jpg";

import HomeImg_desktop_2 from "../assets/img/mainScreen/home_desktop_2.jpg";
import HomeImg_mobile_2 from "../assets/img/mainScreen/home_mobile_2.jpg";
import HomeImg_tablet_2 from "../assets/img/mainScreen/home_tablet_2.jpg";

import HomeImg_desktop_3 from "../assets/img/mainScreen/home_desktop_3.jpg";
import HomeImg_mobile_3 from "../assets/img/mainScreen/home_mobile_3.jpg";
import HomeImg_tablet_3 from "../assets/img/mainScreen/home_tablet_3.jpg";

export const home_header_slider_config = [
  {
	id: 1,
    desktopImg: HomeImg_desktop_1,
    tabletImg: HomeImg_tablet_1,
    mobileImg: HomeImg_mobile_1,
    mediaQuery: {
      tablet: "(max-width: 1005px)",
      mobile: "(max-width: 425px)",
    },
    inscriptionTitle: "comfortable living space",
    inscriptionSubTitle: "realize the dream of own cozy apartments",
    position: "top: 10%; left: 10%;",
	textPosition: 'left'
  },
  {
	id: 2,
    desktopImg: HomeImg_desktop_2,
    tabletImg: HomeImg_tablet_2,
    mobileImg: HomeImg_mobile_2,
    mediaQuery: {
      tablet: "(max-width: 1005px)",
      mobile: "(max-width: 425px)",
    },
    inscriptionTitle: "a sense of comfort",
    inscriptionSubTitle:
      "immerse yourself in the atmosphere of home comfort and warmth",
    position: "bottom: 15%; left: 10%;",
	textPosition: 'left'
  },
  {
	id: 3,
    desktopImg: HomeImg_desktop_3,
    tabletImg: HomeImg_tablet_3,
    mobileImg: HomeImg_mobile_3,
    mediaQuery: {
      tablet: "(max-width: 1005px)",
      mobile: "(max-width: 425px)",
    },

    inscriptionTitle: "original design",
    inscriptionSubTitle:
      "combine the most unusual colors to make your wishes come true",
    position: "bottom: 20%; right: 10%;",
	textPosition: 'right'
  },
];
