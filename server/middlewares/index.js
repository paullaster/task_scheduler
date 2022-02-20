/**
 * Exporting middlewares
 */

const authjwt = require("./authjwt");
const verifySignUp = require("./verifySignup");

module.exports = {
    authjwt,
    verifySignUp,
}