/**
 * This is routes file
 * :Login route
 * :Get tasks route
 */

/**
 * importing Router from EXpress
 */
const router = require("express").Router();


/**
 * Importing app modules
 */
 const db = require("../database/database");
 const config = require('../config/index');


/**
 * Routes
 */
router.post('/personnel/login', async(req,res,next) =>{
    try {
        const {phone, password} = req.body;
        console.log(phone, password)
        res
        .status(200)
        .send({phone, password});
        
    } catch (error) {
        console.error({"Password": "You have entered an incorrect password!"});
        res
        .status(403)
        .send({"Password": "You have entered an incorrect password!"});
    }
    next();
});

/**
 * Export the router
 */
module.exports = router;