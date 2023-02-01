import { viewport_sizes } from "./vieport_size_consts";

export const sizes = {
  global: {
    svgIconSize: 25,
    logoFontSize: 25,
    headerHeightWhenOnTopPage: 70,
    headerHeightWhenScrollDown: 50,
    searchFieldHeight: 50,
    sideMenuSize: 380,
    sideMenuSizeMobile: "85vw",
  },

  xs: { width: viewport_sizes.xs, logoFontSize: 14, svgIconSize: 20 },
  s: { width: viewport_sizes.s, logoFontSize: 16, svgIconSize: 23 },
  m: {
    width: viewport_sizes.m,
    logoFontSize: 20,
    svgIconSize: 30,
    sideMenuLinkFontSize: 22,
    sideMenuSubLinkFontSize: 20,
  },
  l: {
    width: viewport_sizes.l,
    fontSize: 1.2,
    logoSize: 1.5,
    navLinkFontSize: 0.75,
    svgIconSize: 1.4,
    headerHeight: 50,
  },
  xl: {
    width: viewport_sizes.xl,
    fontSize: 1.4,
    logoSize: 1.5,
    navLinkFontSize: 0.75,
    svgIconSize: 25,
    sideMenuLinkFontSize: 24,
    sideMenuSubLinkFontSize: 22,
  },
  xxl: {
    width: viewport_sizes.xxl,
    fontSize: 1.2,
    logoSize: 1.5,
    navLinkFontSize: 0.8,
    svgIconSize: 1.3,
  },
  xxxl: {
    width: viewport_sizes.xxxl,
    fontSize: 1,
    logoSize: 1.5,
    navLinkFontSize: 0.75,
    svgIconSize: 1,
  },
};
