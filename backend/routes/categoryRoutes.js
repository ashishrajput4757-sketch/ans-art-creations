const express = require("express");
const router = express.Router();
const { addCategory, updateCategory, getMainCategories, getSubCategories } = require("../controllers/categoryController");
const upload = require("../config/multer");

router.post("/add", upload.single("image"), addCategory);

router.put("/update/:id", upload.single("image"), updateCategory);

router.get("/main", getMainCategories);

router.get("/sub/:parentId", getSubCategories);

module.exports = router;