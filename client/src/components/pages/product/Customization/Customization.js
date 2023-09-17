// import React from "react";

// import {
//   CustomizationWrapper,
//   CustomizationContainer,
// } from "./Customization.styled";
// import ProductHeader from "./ProductHeader/ProductHeader";
// import { useGetWindowSize } from "../../../../hooks/useGetWindowSize";
// import { viewport_sizes } from "../../../../utils/viewport_size_consts";

// const Customization = () => {
//   const viewport = useGetWindowSize();
//   const bigScreen = viewport.width >= viewport_sizes.xl;
//   return (
//     <CustomizationWrapper>
//       <CustomizationContainer>
//         {bigScreen && <ProductHeader />}
//       </CustomizationContainer>
//     </CustomizationWrapper>
//   );
// };

// export default Customization;




import React from "react";

import {
  CustomizationWrapper,
  CustomizationContainer,
} from "./Customization.styled";

const Customization = () => {
  return (
    <CustomizationWrapper>
      <CustomizationContainer>
        custom <button>click</button>
      </CustomizationContainer>
    </CustomizationWrapper>
  );
};

export default Customization;