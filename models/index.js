const { Sequelize } = require('sequelize');
const { username, password, database, host } = require('../config/config.json')['development'];

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

module.exports = sequelize;