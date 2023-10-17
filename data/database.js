// connect mysql
const mysql = require('mysql');

const config = require('./config');
const dbConfig = {
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
}

const pool = mysql.createPool(dbConfig);

exports.getConnectionPool = () => {
    return pool;
}