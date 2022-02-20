/**
 * Processing Authenitcation and Authorization
 * :check if token provided is valid or not
 * :check if user contain required roles or not
 */

/**
 * Import libraries
 */
const jwt = require("jsonwebtoken");


/**
 * importing app modules
 */
const config = require("../config/index");
const db = require("../database/models/index");


/**
 * User model
 */
const User = db.user;

/**
 * Verifying access token
 */
verifyToken = (req,res,next) =>{
    let token = req.headers["x-access-token"];
    if(!token){
        return res.status(403).send({
            message: "No token provided"
        });
    }
    jwt.verify(token, config.JWT_SECRET, (err, decoded) =>{
        if(err){
            return res.status(401).send({
                message: "unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

/**
 * Check if user is admin
 */
isAdmin = (req,res,next) =>{
    User.findByPk(req.userId)
    .then((user)=>{
        user.getRoles()
        .then((roles)=>{
            for(let i = 0; i< roles.length; i++){
                if(roles[i] === "admin"){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Admin role required"
            });
            return;
        });
    });
};

const authjwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
}

/**
 * Exporting authjwt
 */
module.exports = authjwt;