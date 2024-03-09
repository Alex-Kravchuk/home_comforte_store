import React, { useRef, useState } from "react";
import Product from "../Product";

import { ProductViewerService } from "../../../../api/productViewer/productViewerService";

import { PPPWrapper } from "./PreviewProductPage.styled";
import { Button } from "antd";
import { asyncGetBase64 } from "../../../../helpers/getBase64";

const PreviewProductPage = ({
  generalData,
  previewImages,
  customizationData,
  viewerFiltersData,
}) => {
  const [testState, setTestState] = useState([]);
  const refff = useRef();
  const testRequest = async () => {
    const testData = {
      options: {
        material_type: 12,
        legs: 22,
        size: 11,
        option99: 67,
      },
      furnitureId: 2,
      modifierId: 2,
      modifierOptionId: 12,
    };

    // console.log(refff.current.files);
    // Array.from(refff.current.files).forEach((item) =>
    //   console.log("file", item)
    // );

    const combinedData = { ...testData, images: refff.current.files };
    const formdata = new FormData();

    for (const key in combinedData) {
      if (key === "options") {
        formdata.append(key, JSON.stringify(combinedData[key]));
      } else {
        if (key === "images") {
          Array.from(refff.current.files).forEach((item) => {
            formdata.append("images", item, item.name);
          });

          break;
        }

        formdata.append(key, combinedData[key]);
      }
    }

    // const response = await AuthService.updateUserData(formdata);

    // debugger;
    const response = await ProductViewerService.createViewer(formdata);

    console.log("====================================");
    console.log(response);
    console.log("====================================");
  };
  return (
    <PPPWrapper>
      <Button onClick={testRequest}>Make test post requst</Button>
      <input
        type="file"
        multiple={true}
        onChange={(e) => console.log("eee", e)}
        ref={refff}
      />

      <h2>This is a preview page for an upcoming product</h2>
      <h4>
        If everything is correct, below you should confirm the addition of the
        product
      </h4>

      <Product
        previewMode={true}
        generalData={generalData}
        previewImages={previewImages}
        customizationData={customizationData}
        viewerFiltersData={viewerFiltersData}
      />
    </PPPWrapper>
  );
};

export default PreviewProductPage;
