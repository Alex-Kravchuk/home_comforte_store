const materialInfoMOCK = JSON.stringify({
  data: [
    {
      title: "Leg Frame",
      desription: "Side Legs: Plastic Leg; Middle Legs: Solid Wood",
    },
    { title: "Frame", desription: "Plywood" },
    { title: "Frame", desription: "Plywood" },
    { title: "Frame", desription: "Plywood" },
    {
      title: "Fabric Composition",
      desription: "95% Polyester and 5% Acrylic",
    },
    { title: "Care", desription: "Upholstered Seating" },
    { title: "Prop65 Warning", desription: "Formaldehyde" },
    { title: "Frame", desription: "Plywood" },
    { title: "Frame", desription: "Plywood" },
  ],
});

const dimensionInfoMOCK = (dimensionImgName) =>
  JSON.stringify({
    data: [
      { title: "Dimension", desription: "W82.7' x D89.8' x H47.2'" },
      { title: "Product Weight", desription: "179.5 lbs" },
      { title: "Product Weight", desription: "179.5 lbs" },
      { title: "Product Weight", desription: "179.5 lbs" },
      { title: "Product Weight", desription: "179.5 lbs" },
      { title: "Product Weight", desription: "179.5 lbs" },
      { title: "Product Weight", desription: "179.5 lbs" },
      { title: "Product Weight", desription: "179.5 lbs" },
      { title: "Product Weight", desription: "179.5 lbs" },
    ],
    img: dimensionImgName,
  });

const modifierInfoMOCK = JSON.stringify({
  data: [
    {
      title: "Model",
      values: [
        { name: "Storm Gray", add_variant_Id: 1 },
        { name: "Snow", add_variant_Id: 2 },
      ],
    },
    {
      title: "Size",
      values: [
        { name: "Queen", add_variant_Id: 1 },
        { name: "Middle", add_variant_Id: 2 },
        { name: "King", add_variant_Id: 3 },
      ],
    },
    {
      title: "Material",
      values: [
        {
          name: "Indigo Blue",
          fabric: "80% poliester",
          care: "take care boy",
          add_variant_Id: 1,
          img: "",
        },
        {
          name: "Ivory Beige",
          fabric: "80% poliester, 20% linen",
          care: "something washing",
          add_variant_Id: 2,
          img: "",
        },
        {
          name: "Ivory White",
          fabric: "80% poliester, 10% nylon",
          care: "something washing2222",
          add_variant_Id: 3,
          img: "",
        },
        {
          name: "Ocean Blue",
          fabric: "88% poliester, 20% linen",
          care: "something washing33333",
          add_variant_Id: 4,
          img: "",
        },
        {
          name: "Forest Green",
          fabric: "100% poliester",
          care: "something washing3333312123",
          add_variant_Id: 5,
          img: "",
        },
      ],
    },

    {
      tittle: "Quantity",
      values: [
        { name: "Single", add_variant_Id: 1 },
        { name: "Set of 2", add_variant_Id: 2 },
      ],
    },
  ],
});

module.exports = { dimensionInfoMOCK, modifierInfoMOCK, materialInfoMOCK };
