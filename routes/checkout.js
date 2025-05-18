const express = require("express")
const router = express.Router()
const calculateTotals = require('./calculatetotal'); //Magid: had to add this code to reroute the website to the function

router.get("/", (req, res) => {
  const cart = req.session.cart || []

  if (cart.length === 0) {
    req.session.error_msg = "Your cart is empty"
    return res.redirect("/cart")
  }

  const { subtotal, shipping, total } = calculateTotals(req.session.cart || [])


  res.render("checkout/index", {
    title: "Checkout - CardTrader",
    cart,
    subtotal,
    shipping,     
    total,
  })
})

// Process checkout
router.post("/process", (req, res) => {


  // generate a random order ID
  const orderId = Math.floor(10000000 + Math.random() * 90000000)

  res.redirect(`/checkout/confirmation?orderId=${orderId}`)
})


// Order confirmation
router.get("/confirmation", (req, res) => {
  const orderId = req.query.orderId || "12345678"

  // Clear the cart
  req.session.cart = []

  res.render("checkout/confirmation", {
    title: "Order Confirmation - CardTrader",
    orderId,
  })
})

module.exports = router
