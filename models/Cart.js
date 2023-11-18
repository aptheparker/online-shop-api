const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  }, 
  productId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

sequelize.sync({ force: false })
  .then(() => {
    console.log("Cart 테이블 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = Cart;
