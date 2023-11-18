const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});

sequelize.sync({ force: false })
  .then(() => {
    console.log("User 테이블 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = User;
