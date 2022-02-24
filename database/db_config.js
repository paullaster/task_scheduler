/**
 * Connecting to the Database
 * 
 */

/**
 * Importing configuration module
 */
const config = require("../config/index");


const pool = {
    user: config.USER,
    password: config.PASSWORD,
    host:config.HOST,
    port: config.DB_PORT,
    database: config.DATABASE,
    dialect: "postgres",
    pool:{
        max: 10,
        min:0,
        acquire: 30000,
        idle: 10000
    },
};

module.exports = pool;