export const createDefaultFilters = (data) => {
  const defaultFilters = {};
  data.forEach((mod) => {
    defaultFilters[mod.name] = mod.items.find(
      (item) => item.defaultMarker
    ).title;
  });

  return defaultFilters;
};
