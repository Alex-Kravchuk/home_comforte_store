import ListType from "../../components/pages/product/Customization/Modifiers/ListType/ListType";
import TileType from "../../components/pages/product/Customization/Modifiers/TileType/TileType";
import CellType from "../../components/pages/product/Customization/Modifiers/CellType/CellType";

export const defineModifier = (modifier) => {
  const typesConfig = {
    list: {
      key: modifier.id,
      label: modifier.name,
      children: <ListType data={modifier.items} />,
    },
    tile: {
      key: modifier.id,
      label: modifier.name,
      children: <TileType data={modifier.items} />,
    },
    cell: {
      key: modifier.id,
      label: modifier.name,
      children: <CellType data={modifier.items} />,
    },
  };

  return typesConfig[modifier.displayMethod];
};
