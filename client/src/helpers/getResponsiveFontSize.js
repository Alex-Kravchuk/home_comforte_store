export const getResponsiveFontSize = (
  defaultSize,
  minimalSize,
  screen = 1440
) => {
  const reducer = defaultSize - minimalSize;

  const expression = `calc(${minimalSize}px + (${reducer} + ${reducer} * 0.7) * ((100vw - 320px) / ${screen}))`;

  return expression;
};
