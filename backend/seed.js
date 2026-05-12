const mongoose = require("mongoose");
require("dotenv").config();
const Category = require("./models/Category");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    // MAIN CATEGORIES (without deleting old)
    const stationery = await Category.create({ name: "Stationery/Office Supplies" });
    const desktop = await Category.create({ name: "Desktop Items" });
    const gift = await Category.create({ name: "Gift Items" });
    const drinkware = await Category.create({ name: "Drinkware/Beverageware" });
    const clothing = await Category.create({ name: "Clothing" });
    const spiritual = await Category.create({ name: "Spiritual Essentials" });

    // Stationery Sub
    const pens = await Category.create({ name: "Pens", parent: stationery._id });
    const bags = await Category.create({ name: "Bags", parent: stationery._id });

    // Pens SubSub
    await Category.insertMany([
      { name: "Ball Point Pens", parent: pens._id },
      { name: "Gel Pens", parent: pens._id },
      { name: "Fountain Pens", parent: pens._id },
      { name: "Marker Pens", parent: pens._id },
      { name: "Stylus Pens", parent: pens._id },
    ]);

    // Bags SubSub
    await Category.insertMany([
      { name: "Laptop Bags", parent: bags._id },
      { name: "Office Bags", parent: bags._id },
    ]);

    // Desktop Items Sub
    await Category.insertMany([
      { name: "Desk Organizers", parent: desktop._id },
      { name: "Ergonomics & Lighting", parent: desktop._id },
      { name: "Decor & Personalization", parent: desktop._id },
      { name: "Table Calendars", parent: desktop._id },
    ]);

    // Gift
    await Category.create({ name: "Gift Sets", parent: gift._id });

    // Drinkware
    const bottles = await Category.create({ name: "Bottles", parent: drinkware._id });
    const mugs = await Category.create({ name: "Mugs", parent: drinkware._id });
    const cups = await Category.create({ name: "Cups", parent: drinkware._id });

    await Category.insertMany([
      { name: "Custom", parent: bottles._id },
      { name: "Plain", parent: bottles._id },
      { name: "Custom", parent: mugs._id },
      { name: "Plain", parent: mugs._id },
      { name: "Custom", parent: cups._id },
      { name: "Plain", parent: cups._id },
    ]);

    // Clothing
    const tshirt = await Category.create({ name: "T-shirt", parent: clothing._id });

    await Category.insertMany([
      { name: "Polo T-shirt", parent: tshirt._id },
      { name: "Round Neck T-shirt", parent: tshirt._id },
    ]);

    // Spiritual
    await Category.create({ name: "Idol Statues", parent: spiritual._id });

    console.log("Data Inserted Successfully ✅");
    process.exit();

  })
  .catch(err => console.log(err));