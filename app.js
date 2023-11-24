// express
const express = require("express");
const app = express();
const path = require('path');

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const { username, password, database, host } = require('./config/config.json')['development'];

const sessionStore = new MySQLStore({
  host: host,
  port: 3306,
  user: username,
  password: password,
  database: database,
});

app.use(session({
  key: 'session_cookie_name',
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
}));

sessionStore.onReady().then(() => {
	// MySQL session store ready for use.
	console.log('MySQLStore 준비 완료');
}).catch(error => {
	// Something went wrong.
	console.error(error);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

// routes
const mainRoute = require('./routes/MainRoute');
const authRoute = require('./routes/AuthRoute');
const shopRoute = require('./routes/ShopRoute');
const cartRoute = require('./routes/CartRoute');
const adminRoute = require('./routes/AdminRoute');
app.use('/', mainRoute);
app.use('/auth', authRoute);
app.use('/shop', shopRoute);
app.use('/cart', cartRoute);
app.use('/admin', adminRoute);

// database
const sequelize = require('./models/index');
// const User = require('./models/User');
// const Product = require('./models/Product');
// const Cart = require('./models/Cart');

// User.hasMany(Product); // 1:N
// User.hasMany(Cart); // 1:N
// Product.hasMany(Cart); // 1:N

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
