/**
 * Connecting to the Database
 * using the pg library
 */
const Pool = require("pg").Pool;

/**
 * Importing configuration module
 */
const config = require("../config/index");


const pool = new Pool({
    user: config.USER,
    password: config.PASSWORD,
    host:config.HOST,
    port: config.DB_PORT,
    database: config.DATABASE,
});

module.exports = pool;