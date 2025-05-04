const express = require('express');
const router = express.Router();
const cardsModel = require('../model/cards');  // Importing the cards model from the 'model' folder

// Get all cards
router.get("/", (req, res) => {
  const cards = cardsModel.getAllCards();  // Fetch all cards from the cards model
  res.render("cards/index", {  // Rendering the 'cards/index.ejs' view in the 'views/cards' folder
    title: "Browse Cards - CardTrader",
    cards,
  });
});

// Get card by ID
router.get("/:id", (req, res) => {
  const card = cardsModel.getCardById(req.params.id);  // Fetch card by ID

  if (!card) {
    req.session.error_msg = "Card not found";
    return res.redirect("/cards");
  }

  const similarCards = cardsModel.getSimilarCards(req.params.id);  // Fetch similar cards by category

  res.render("cards/show", {  // Rendering the 'cards/show.ejs' view in the 'views/cards' folder
    title: `${card.name} - CardTrader`,
    card,
    similarCards,
  });
});

module.exports = router;
