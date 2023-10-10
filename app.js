const express = require("express");
const app = express();
const path = require('path');

const shopController = require('./controllers/ShopController');
const cartController = require('./controllers/CartController');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/shop', shopController);
app.use('/cart', cartController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
