const Category = require("../models/Category");

// Add Category
exports.addCategory = async (req, res) => {
  try {
    const { name, parent } = req.body;

    const image = req.file ? req.file.path : "";

    const category = new Category({
      name,
      parent: parent || null,
      image,
    });

    await category.save();

    res.status(201).json({
      message: "Category added",
      category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = {
      name: req.body.name,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updated = await Category.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json({
      message: "Category updated",
      updated,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL MAIN CATEGORIES
exports.getMainCategories = async (req, res) => {
  try {
    const categories = await Category.find({ parent: null });

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SUBCATEGORIES BY PARENT ID
exports.getSubCategories = async (req, res) => {
  try {
    const { parentId } = req.params;

    const subCategories = await Category.find({ parent: parentId });

    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};