const { Model } = require("sequelize");
const { Product, Variant } = require("../models");

const addProduct = async (req, res) => {
  try {
    const { name, category, price, stock, variants } = req.body;

    // Create the product
    const product = await Product.create({ name, category, price, stock });

    // Create associated variants if they exist
    if (variants && variants.length > 0) {
      const variantRecords = variants.map((variant) => ({
        ...variant,
        productId: product.id, // Associate with the created product
      }));

      await Variant.bulkCreate(variantRecords);
    }

    // Fetch the product with its variants
    const newProduct = await Product.findByPk(product.id, { include: Variant });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: { model: Variant },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, { include: Variant });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { addProduct, getAllProducts, getProductById };
