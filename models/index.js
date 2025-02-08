const sequelize = require("../config/db");
const Product = require("./Product");
const Variant = require("./Variants");

const syncDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB");
    await sequelize.sync({ alter: true });
    console.log("DB synced");
  } catch (error) {
    console.log("DB connection failed", error);
  }
};
syncDB();
module.exports = { Product, Variant };
