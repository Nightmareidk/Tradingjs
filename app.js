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