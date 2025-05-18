const express = require('express');
const router = express.Router();
const cardsModel = require('../model/cards');
router.get("/", (req, res) => {
  let cards = cardsModel.getAllCards();  // Magid: Zille had this as a const I changed it to let so the next line of code could work for me
  cards = cards.map(card => {  
  return {
    ...card,
    price: typeof card.price === "number" ? card.price : 0
  };
});  //Magid: had chatgpt's help with the previous function because I kept running into an error where the site crashes, this stopped it from doing that
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
