const express = require('express');
const router = express.Router();


// This is the main route file for the application. It sets up the main route and renders the index view.


router.get('/', (req, res) => {
  res.render('index', { title: 'card trader' });  // this uses views/index.ejs
});

module.exports = router;
