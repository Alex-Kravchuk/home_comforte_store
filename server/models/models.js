const sequelize = require("../db");
const { DataTypes } = require("sequelize");

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

const Furniture = sequelize.define("furniture", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.STRING, defaultValue: 0 },
  img: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  material_info: { type: DataTypes.JSON, allowNull: false },
  dimension_info: { type: DataTypes.JSON, allowNull: false },
  modifier_info: { type: DataTypes.JSON },
});

const AdditionalVariant = sequelize.define("additional_variant", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.STRING, defaultValue: 0 },
  img: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  material_info: { type: DataTypes.JSON, allowNull: false },
  dimension_info: { type: DataTypes.JSON, allowNull: false },
});

const Review = sequelize.define("review", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  review_title: { type: DataTypes.STRING },
  review_body: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.ARRAY(DataTypes.STRING) },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
});

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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

// ordinary furniture

Type.hasMany(Furniture);
Furniture.belongsTo(Type);

Brand.hasMany(Furniture);
Furniture.belongsTo(Brand);

Furniture.hasMany(Rating);
Rating.belongsTo(Furniture);

Furniture.hasMany(Review);
Review.belongsTo(Furniture);

Furniture.hasMany(BasketFurniture);
BasketFurniture.belongsTo(Furniture);

Furniture.hasMany(AdditionalVariant);
AdditionalVariant.belongsTo(Furniture);

// additional furniture

Type.hasMany(AdditionalVariant);
AdditionalVariant.belongsTo(Type);

Brand.hasMany(AdditionalVariant);
AdditionalVariant.belongsTo(Brand);

AdditionalVariant.hasMany(Rating);
Rating.belongsTo(AdditionalVariant);

AdditionalVariant.hasMany(Review);
Review.belongsTo(AdditionalVariant);

AdditionalVariant.hasMany(BasketFurniture);
BasketFurniture.belongsTo(AdditionalVariant);

Furniture.hasMany(AdditionalVariant);
AdditionalVariant.belongsTo(Furniture);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  User,
  Basket,
  Furniture,
  BasketFurniture,
  Type,
  Brand,
  Rating,
  Review,
  AdditionalVariant,
  TypeBrand,
  PurchaseHistory,
};
