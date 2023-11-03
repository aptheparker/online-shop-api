const express = require("express");
const app = express();
const path = require('path');
const { sequelize } = require('./models/index'); // 시퀄라이즈

const mainController = require('./controllers/MainController');
const authController = require('./controllers/AuthController');
const userController = require('./controllers/UserController');
const shopController = require('./controllers/ShopController');
const cartController = require('./controllers/CartController');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // This middleware will parse JSON data from request bodies
app.use(express.urlencoded({ extended: true }));


app.use('/', mainController);
app.use('/auth', authController);
app.use('/user', userController);
app.use('/shop', shopController);
app.use('/cart', cartController);

app.set("view engine", "ejs");
app.set("views", "views");

sequelize.sync({ force: false }) // 서버 실행시마다 테이블을 재생성할건지에 대한 여부
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
