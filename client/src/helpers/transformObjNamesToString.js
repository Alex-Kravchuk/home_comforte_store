export const transformObjNamesToString = (obj) => {
  const filterOptionsWithCorrectName = {};
  for (const key in obj) {
    const correctName = key.toLowerCase().split(" ");
    correctName.splice(0, 1);

    filterOptionsWithCorrectName[correctName.join("_")] = obj[key];
  }

  return JSON.stringify(filterOptionsWithCorrectName);
};
