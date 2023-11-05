// express
const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

// database
const { sequelize } = require('./models/index');
// TODO: models

// routes
const mainRoute = require('./routes/MainRoute');
const authRoute = require('./routes/AuthRoute');
const userRoute = require('./routes/UserRoute');
const shopRoute = require('./routes/ShopRoute');
const cartRoute = require('./routes/CartRoute');
app.use('/', mainRoute);
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/shop', shopRoute);
app.use('/cart', cartRoute);


sequelize.sync({ force: false }) // force: true -> 테이블 재생성
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
