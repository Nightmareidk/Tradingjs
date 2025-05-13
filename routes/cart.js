const express = require("express")
const router = express.Router()
const cardsModel = require("../model/cards.js")

// View cart
router.get("/", (req, res) => {
  const cart = req.session.cart || []

const { subtotal, shipping, total } = calculateTotals(req.session.cart || [])

  res.render("cart/index", {
    title: "Your Cart - CardTrader",
    cart,
    subtotal,
    shipping,
    total,
  })
})

// Add to cart
router.post("/add", (req, res) => {
  const cardId = Number.parseInt(req.body.id)
  const card = cardsModel.getCardById(cardId)

  if (!card) {
    req.session.error_msg = "Card not found"
    return res.redirect("/cards")
  }

  if (!card.inStock) {
    req.session.error_msg = "This card is out of stock"
    return res.redirect(`/cards/${cardId}`)
  }

  if (!req.session.cart) {
    req.session.cart = []
  }

  const existingItem = req.session.cart.find((item) => item.id === cardId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    req.session.cart.push({
      id: card.id,
      name: card.name,
      image: card.image,
      price: card.price,
      quantity: 1,
    })
  }

  req.session.success_msg = `${card.name} has been added to your cart`
  res.redirect("/cart")
})

router.post("/update/:id", (req, res) => {
  const itemId = Number.parseInt(req.params.id)
  const quantity = Number.parseInt(req.body.quantity)

  if (!req.session.cart) {
    return res.redirect("/cart")
  }

  if (quantity <= 0) {
    req.session.cart = req.session.cart.filter((item) => item.id !== itemId)
  } else {
    const item = req.session.cart.find((item) => item.id === itemId)
    if (item) {
      item.quantity = quantity
    }
  }

  res.redirect("/cart")
})

// Remove from cart
router.post("/remove/:id", (req, res) => {
  const itemId = Number.parseInt(req.params.id)

  if (!req.session.cart) {
    return res.redirect("/cart")
  }

  req.session.cart = req.session.cart.filter((item) => item.id !== itemId)
  res.redirect("/cart")
})

module.exports = router
