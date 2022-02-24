/**
 * Authorization routes
 */

/**
 * importing app modules
 */
const {authjwt} = require("../middlewares/index");
const controller = require("../controllers/user.controllers");

/**
 * Exporting authorization routes
 */
module.exports = function(app){
    /**
     * Setting authorization headers
     */
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    /**
     * Fetch for public content
    */
     app.get(
        "/task/public",
        controller.publiccontent
    );
    /**
     * Fetch task for logged user
     */
     app.get(
        "/task/loggeduser",
        [authjwt.verifyToken],
        controller.normalusercontent
    );
    /**
     * Fetch task for moderator
     */
     app.get(
        "/task/moderator",
        [authjwt.verifyToken, authjwt.isModerator],
        controller.moderatorcontent
    );
    /**
     * Fetch task for admin user
     */
    app.get(
        "/task/assigned",
        [authjwt.verifyToken, authjwt.isAdmin],
        controller.admincontent
    );
};