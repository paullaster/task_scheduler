/**
 * Authentication routes
 */

/**
 * Importing app modules
 */
const {verifySignUp} = require("../middlewares/index");
const controller = require("../controllers/auth.controller");

/**
 * Exporting authentication routes
 */
module.exports = function(app){
    /**
     * Setting authentication headers
     */
    app.use(function(req,res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    /**
     * Signup route
     */
    app.post(
        "/personnel/signup",
        [
            verifySignUp.checkDuplicatePhone,
            verifySignUp.checkRoleExisted
        ],
        controller.signup
    )

    /**
     * Signin route
     */
    app.post("/personnel/login", controller.signin);
};