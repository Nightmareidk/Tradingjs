function calculateTotal(cart) {
  let subtotal = 0;

  cart.forEach(item => {
    if (item.price && item.quantity) {
      subtotal += item.price * item.quantity;
    }
  });

  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}

module.exports = calculateTotal;
