function calculateTotals(cart) {
      const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
      const shipping = subtotal > 100 ? 0 : 10
      const total = subtotal + shipping
      return { subtotal, shipping, total }
    }