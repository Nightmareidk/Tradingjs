const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejsLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up the view engine (EJS)
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.set('layout', 'layouts/main');  // Use a layout for common structures (e.g., header/footer)

// Middleware
app.use(logger('dev'));  // Log requests
app.use(express.json());  // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded data
app.use(cookieParser());  // Parse cookies
app.use(express.static(path.join(__dirname, 'public')));  // serve static files (e.g., CSS, JS, images)

// Session setup
app.use(session({
  secret: 'cardtrader-secret-key', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 15 * 60 * 1000},  // Session lasts for 15 mins
}));

// Flash messages middleware (success/error messages in views)
app.use((req, res, next) => {
  res.locals.success_msg = req.session.success_msg;
  res.locals.error_msg = req.session.error_msg;
  delete req.session.success_msg;
  delete req.session.error_msg;
  next();
});

// Cart count middleware (tracks the number of items in the cart)
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  res.locals.cartCount = req.session.cart.reduce((total, item) => total + item.quantity, 0);
  next();
});

// Import routes 
const indexRoutes = require('./routes/index');
const cardsRoutes = require('./routes/cards');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');
const authRoutes = require('./routes/auth');
const collectionsRoutes = require('./routes/collections');

// Use the routes
app.use('/', indexRoutes);
app.use('/cards', cardsRoutes);
app.use('/cart', cartRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/collections', collectionsRoutes);
app.use('/auth', authRoutes);  // For login/signup routes

/* NOT SO IMPORTANT (OPTIONAL)

// 404 error handler (if no routes match)
app.use((req, res) => {
  res.status(404).render('error', {
    title: '404 - Page Not Found',
    message: 'The page you are looking for does not exist.',
  });
});

// 500 error handler (for server errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: '500 - Server Error',
    message: 'Something went wrong on our end.',
  });
});
*/
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;