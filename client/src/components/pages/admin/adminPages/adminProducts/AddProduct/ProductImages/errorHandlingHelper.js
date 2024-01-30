import { transformObjNamesToString } from "../../../../../../../helpers/transformObjNamesToString";

export const errorHandlingHelper = (
  customizationData,
  filters,
  previewData
) => {
  const defaultErrorText =
    "You have not filled in all the information in this block";

  const defaultFilterNotExist = "You did not add default filter";

  const defaultFiltersHasNoImagesErrorText =
    "You must upload an image for the default filters";

  if (filters.length < 1 || previewData.length < 1) {
    return defaultErrorText;
  }

  // we don't write modifiers with noAffectToDisplay flag to default filters
  const currentDefaultFilters = {};
  customizationData.forEach((mod) => {
    if (mod.noAffectToDisplay) {
      return;
    }
    currentDefaultFilters[mod.name] = mod.items.find(
      (item) => item.defaultMarker
    ).title;
  });

  const defaultFilterOptions = transformObjNamesToString(currentDefaultFilters);
  const defaultFilter = filters.find(
    (fil) => fil.options === defaultFilterOptions
  );

  if (!defaultFilter) {
    return defaultFilterNotExist;
  }

  if (defaultFilter.images.length === 0) {
    return defaultFiltersHasNoImagesErrorText;
  }

  return null;
};
