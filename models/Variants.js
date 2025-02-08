const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Product = require("./Product");

const Variant = sequelize.define(
  "Variant",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    productId: { type: DataTypes.INTEGER, allowNull: false },
    color: { type: DataTypes.STRING },
    size: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    stock: { type: DataTypes.INTEGER },
  },
  { timestamps: true }
);

Product.hasMany(Variant, { foreignKey: "productId", onDelete: "CASCADE" });
Variant.belongsTo(Product, { foreignKey: "productId" });

module.exports = Variant;
