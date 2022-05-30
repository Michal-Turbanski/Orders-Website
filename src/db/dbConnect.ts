const { Sequelize } = require('sequelize');

const dbName: string = process.env.DB_NAME || 'ordersDB';
const dbUser: string = process.env.DB_USER || 'user';
const dbPassword: string = process.env.DB_PASSWORD || 'password';
const dbDialect: string = process.env.DB_DIALECT || 'sqlite';
const dbHost: string = process.env.DB_HOST || './db/ordersDB.sqlite';

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: dbDialect,
    host: dbHost
})