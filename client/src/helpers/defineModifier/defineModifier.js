import ListType from "../../components/pages/product/Customization/Modifiers/ListType/ListType";
import TileType from "../../components/pages/product/Customization/Modifiers/TileType/TileType";
import CellType from "../../components/pages/product/Customization/Modifiers/CellType/CellType";

export const defineModifier = (
  modifier,
  selectedOptionHandler,
  filterOptionsHandler
) => {
  const typesConfig = {
    list: {
      key: modifier.id,
      label: modifier.name,
      children: (
        <ListType
          data={modifier.items}
          currentModifierID={modifier.id}
          filterOptionsHandler={filterOptionsHandler}
          selectedOptionHandler={selectedOptionHandler}
        />
      ),
    },
    tile: {
      key: modifier.id,
      label: modifier.name,
      children: (
        <TileType
          data={modifier.items}
          currentModifierID={modifier.id}
          filterOptionsHandler={filterOptionsHandler}
          selectedOptionHandler={selectedOptionHandler}
        />
      ),
    },
    cell: {
      key: modifier.id,
      label: modifier.name,
      children: (
        <CellType
          data={modifier.items}
          currentModifierID={modifier.id}
          filterOptionsHandler={filterOptionsHandler}
          selectedOptionHandler={selectedOptionHandler}
        />
      ),
    },
  };

  return typesConfig[modifier.displayMethod];
};
