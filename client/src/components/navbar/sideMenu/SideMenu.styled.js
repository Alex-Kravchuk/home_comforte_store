import { Drawer } from "antd";
import styled from "styled-components";

// export const drawerContentSizeConfig = {
//   sx: {
//     width: {
//       xs: "85vw",
//       sm: "55vw",
//       md: "45vw",
//     },
//   },
// };

export const CustomDrawer = styled(Drawer)`
  &.ant-drawer-content-wrapper {
    width: 80vw;
  }
`;

export const DrawerContentWrapper = styled.div``;
export const DrawerContentContainer = styled.div``;
