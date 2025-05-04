//imports express and the cards model
const express = require("express")
const router = express.Router()
const cardsModel = require("../models/cards")

//get all cards
router.get("/", (req, res) => {
  const cards = cardsModel.getAllCards()

  res.render("cards/index", {
    title: "Browse Cards - CardTrader",
    cards,
  })
})

// Get card by ID
router.get("/:id", (req, res) => {
  const card = cardsModel.getCardById(req.params.id)

  if (!card) {
    req.session.error_msg = "Card not found"
    return res.redirect("/cards")
  }

  const similarCards = cardsModel.getSimilarCards(req.params.id)

  res.render("cards/show", {
    title: `${card.name} - CardTrader`,
    card,
    similarCards,
  })
})

module.exports = router
