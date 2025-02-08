const { Product, Variant } = require("../models");

const addProduct = async (req, res) => {
  const { name, category, price, stock } = req.body;

  try {
    const product = await Product.create({ name, category, price, stock });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ include: Variant });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { addProduct, getAllProducts };
