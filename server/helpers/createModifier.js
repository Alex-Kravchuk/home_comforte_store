const createModifier = (displayMethod, images = [], details) => {
  let modifier;

  details = JSON.parse(details);

  if (displayMethod === "list") {
    modifier = images.map((element, index) => {
      const { title, description } = details[index];
      return {
        id: ++index,
        title,
        description,
        img: element,
      };
    });

    return modifier;
  }

  if (displayMethod === "tile") {
    modifier = details.map((element, index) => {
      const { title, description, price } = element;
      const img = images.length === 0 ? null : images[index];

      return {
        id: ++index,
        title: title ?? null,
        description: description ?? null,
        price: price ?? null,
        img: img,
      };
    });

    return modifier;
  }

  if (displayMethod === "table") {
    modifier = details.map((detail, index) => {
      const { title, price } = detail;
      return {
        id: ++index,
        title: title ?? null,
        price: price ?? null,
      };
    });

    return modifier;
  }
};

module.exports = createModifier;
