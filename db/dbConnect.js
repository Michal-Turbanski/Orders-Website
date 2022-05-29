//@ts-ignore
const { Sequelize } = require('sequelize');
const dbName = process.env.DB_NAME || 'ordersDB';
const dbUser = process.env.DB_USER || 'user';
const dbPassword = process.env.DB_PASSWORD || 'password';
const dbDialect = process.env.DB_DIALECT || 'sqlite';
const dbHost = process.env.DB_HOST || './db/ordersDB.sqlite';
//@ts-ignore
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: dbDialect,
    host: dbHost
});
module.exports = sequelize;
