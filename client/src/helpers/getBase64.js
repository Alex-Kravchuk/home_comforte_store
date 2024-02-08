export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const asyncGetBase64 = (img) => {
  debugger
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => res(reader.result));
    reader.readAsDataURL(img);
  });
};
