const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const statisticsRoutes = require('./routes/statistics');

app.use(userRoutes);
app.use('/admin', adminRoutes);
app.use('/statistics', statisticsRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
