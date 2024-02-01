export const createDefaultFilters = (data, forOrder = false) => {
  const defaultFilters = {};

  // we ignore noAffectToDisplay flag when create filters for order before request to server
  if (forOrder) {
    // set additional price to 0, because price with default modifier items equal price from general info
    const arrayOfFiltersForOrder = data.map((mod) => ({
      [mod.name]: mod.items.find((item) => item.defaultMarker).title,
      additionalPrice: 0
    }));

    return arrayOfFiltersForOrder;
  }

  // when modifier has noAffectToDisplay flag, we ignore it, because
  // data base doesn't have any viewer images with such filters
  data.forEach((mod) => {
    if (mod.noAffectToDisplay) {
      return;
    }
    defaultFilters[mod.name] = mod.items.find(
      (item) => item.defaultMarker
    ).title;
  });

  return defaultFilters;
};
