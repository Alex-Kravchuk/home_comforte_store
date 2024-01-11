import ListType from "../../components/pages/product/Customization/Modifiers/ListType/ListType";
import TileType from "../../components/pages/product/Customization/Modifiers/TileType/TileType";
import CellType from "../../components/pages/product/Customization/Modifiers/CellType/CellType";

export const defineModifier = (modifier, filtersHandler) => {
  const typesConfig = {
    list: {
      key: modifier.id,
      label: modifier.name,
      children: (
        <ListType currentModifier={modifier} filtersHandler={filtersHandler} />
      ),
    },
    tile: {
      key: modifier.id,
      label: modifier.name,
      children: (
        <TileType currentModifier={modifier} filtersHandler={filtersHandler} />
      ),
    },
    cell: {
      key: modifier.id,
      label: modifier.name,
      children: (
        <CellType currentModifier={modifier} filtersHandler={filtersHandler} />
      ),
    },
  };

  return typesConfig[modifier.displayMethod];
};
