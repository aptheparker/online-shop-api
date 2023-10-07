const express = require("express");
const app = express();

const userControllers = require('./controllers/UserController');
const adminControllers = require('./controllers/AdminController');
const statisticsControllers = require('./controllers/StatisticsController');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + '/public'));

app.use(userControllers);
app.use('/admin', adminControllers);
app.use('/statistics', statisticsControllers);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
