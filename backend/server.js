const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Image folder access
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/category", categoryRoutes);

app.use("/api/product", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});