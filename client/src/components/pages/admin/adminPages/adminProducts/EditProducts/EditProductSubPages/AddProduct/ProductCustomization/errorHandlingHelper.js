export const errorHandlingHelper = (modifiers) => {
  const defaultErrorText =
    "You have not filled in all the information in this block";
  const optionWithoutChildrenErrorText =
    "You cannot add a customization option without option elements";

  const optionItemIsEmptyErrorText =
    "You cannot add an empty customization option";

  if (modifiers.length < 1) {
    return defaultErrorText;
  }

  const modifiersWithoutChildren = modifiers.some(
    (modifier) => modifier.items.length === 0
  );

  if (modifiersWithoutChildren) {
    return optionWithoutChildrenErrorText;
  }


  let modifierWithErrors = [];

  modifiers.forEach(({ name, items }) => {
    const lastElement = items[items.length - 1];
    const lastElementIsEmpty =
      lastElement?.img === null ||
      lastElement?.price === null ||
      lastElement?.title === null;

    if (lastElementIsEmpty) {
      modifierWithErrors.push({ name });
    }
  });

  if (modifierWithErrors.length > 0) {
    return optionItemIsEmptyErrorText;
  }

  return null;
};
