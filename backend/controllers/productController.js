const Product = require("../models/Product");

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const image = req.file ? req.file.path : "";

    const product = new Product({
      name,
      price,
      description,
      category,
      image,
    });

    await product.save();

    res.status(201).json({
      message: "Product added",
      product,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET PRODUCTS BY CATEGORY
exports.getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const products = await Product.find({ category: categoryId });

    res.json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};