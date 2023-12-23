export const errorHandlingHelper = (customizationData, previewData) => {
  const defaultErrorText =
    "You have not filled in all the information in this block";

  const minimumOneWithImagesErrorText =
    "You must load the image into at least the first settings modifier used by default (the first list item in each selector)";

  if (customizationData.length < 1 || previewData.length < 1) {
    return defaultErrorText;
  }

  const defaultCustomizationModifierWithImages =
    customizationData[0].items[0].viewerImages?.length > 0;

  if (!defaultCustomizationModifierWithImages) {
    return minimumOneWithImagesErrorText;
  }
  return null;
};
