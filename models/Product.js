const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ force: false })
  .then(() => {
    console.log("Product 테이블 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = Product;
