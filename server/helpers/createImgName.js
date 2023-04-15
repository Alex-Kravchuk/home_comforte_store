const path = require("path");
const uuid = require("uuid");

const createImgName = (image, type) => {
  // if legth is 0 throw error
  if (!image) {
    return;
  }

  const imgIsArray = Array.isArray(image);
  const typeIsArray = type === "ARRAY";

  let filesNames = [];

  if (typeIsArray && imgIsArray) {
    image.forEach((img) => {
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      filesNames.push(fileName);
    });

    return filesNames;
  }

  if (typeIsArray && !imgIsArray) {
    let fileName = uuid.v4() + ".jpg";
    image.mv(path.resolve(__dirname, "..", "static", fileName));

    filesNames.push(fileName);

    return filesNames;
  }

  if (!typeIsArray && !imgIsArray) {
    let fileName = uuid.v4() + ".jpg";
    image.mv(path.resolve(__dirname, "..", "static", fileName));

    return fileName;
  }
};

module.exports = createImgName;
