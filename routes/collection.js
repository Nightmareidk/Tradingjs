const express = require("express");
const router = express.Router();
const cardsModel = require("../model/cards");  

// this code includes routes to get all categories and to get cards by category

// get all categories
router.get("/", (req, res) => {
  const categories = cardsModel.getAllCategories();  
  res.render("collection/index", {  
    title: "Collection - CardTrader",
    categories,  
  });
});

// get cards by category
router.get("/:id", (req, res) => {
  const categoryId = req.params.id;  
  const cards = cardsModel.getCardsByCategory(categoryId); 
  const categories = cardsModel.getAllCategories();
  const category = categories.find((cat) => cat.id === categoryId); 

  if (!category) {
    req.session.error_msg = "Category not found"; 
    return res.redirect("/collections");
  }

  res.render("collection/show", {     //renders show.ejs
    title: `${category.name} Cards - CardTrader`,  
    cards,  
    category, 
  });
});

module.exports = router;
