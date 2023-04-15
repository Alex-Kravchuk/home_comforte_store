const sequelize = require("../db");

const { DataTypes } = require("sequelize");

// user settings

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  mobile: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  bonus: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING },
  role: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: ["USER"] },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const PurchaseHistory = sequelize.define("purchase_history", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  goods: { type: DataTypes.JSON, allowNull: false },
});

const BasketFurniture = sequelize.define("basket_furniture", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Review = sequelize.define("review", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  review_title: { type: DataTypes.STRING },
  review_body: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.ARRAY(DataTypes.STRING) },
});

// furniture settings

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const SubType = sequelize.define("sub_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Furniture = sequelize.define("furniture", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.STRING, defaultValue: 0 },
  img: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  dimension_info: { type: DataTypes.JSON, allowNull: false },
});

const Modifier = sequelize.define("modifier", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  items: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  displayMethod: { type: DataTypes.STRING, allowNull: false },
});

const Preview = sequelize.define("preview", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.JSON, allowNull: false },
});

const Seating = sequelize.define("seating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.JSON, allowNull: false },
  details: { type: DataTypes.JSON, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
});

const Collection = sequelize.define("collections", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

// user settings

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

User.hasMany(PurchaseHistory);
PurchaseHistory.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

// basket settings

Basket.hasMany(BasketFurniture);
BasketFurniture.belongsTo(Basket);

Basket.hasMany(PurchaseHistory);
PurchaseHistory.belongsTo(Basket);

// category and types settings

Category.hasMany(Type);
Type.belongsTo(Category);

Type.hasMany(SubType);
SubType.belongsTo(Type);

Category.hasMany(Furniture);
Furniture.belongsTo(Category);

Type.hasMany(Furniture);
Furniture.belongsTo(Type);

SubType.hasMany(Furniture);
Furniture.belongsTo(SubType);

// furnture settings

Furniture.hasMany(Rating);
Rating.belongsTo(Furniture);

Furniture.hasMany(Review);
Review.belongsTo(Furniture);

Furniture.hasMany(BasketFurniture);
BasketFurniture.belongsTo(Furniture);

Furniture.hasMany(Modifier);
Modifier.belongsTo(Furniture);

Furniture.hasMany(Preview);
Preview.belongsTo(Furniture);

Furniture.hasMany(Seating);
Seating.belongsTo(Furniture);

Collection.hasMany(Furniture);
Furniture.belongsTo(Collection);

module.exports = {
  User,
  Basket,
  Furniture,
  BasketFurniture,
  Type,
  Rating,
  Review,
  PurchaseHistory,
  Collection,
  Category,
  SubType,
  Seating,
  Preview,
  Modifier,
};
