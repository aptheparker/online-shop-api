const express = require("express");
const app = express();
const path = require('path');

const mainController = require('./controllers/MainController');
const shopController = require('./controllers/ShopController');
const cartController = require('./controllers/CartController');

app.use('/', mainController);
app.use('/shop', shopController);
app.use('/cart', cartController);

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
