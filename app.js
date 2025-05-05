//cookiesss

const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// import routes
const authRoutes = require('./routes/auth');

// use routes
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//express app

const express = require('express');
const session = require('express-session');
const app = express();

// Middleware to serve static files
app.use(express.static('public')); // Serving files from the 'public' folder

// Use EJS for rendering views
app.set('view engine', 'ejs'); // Tells Express to use EJS templates

// Session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Import and use the checkout route
const checkoutRoutes = require('./routes/checkout');
app.use('/checkout', checkoutRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

//collections route
const collectionsRoutes = require("./routes/collections"); // Import your collections routes
app.use("/collections", collectionsRoutes); 