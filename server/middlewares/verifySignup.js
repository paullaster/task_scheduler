/**
 * Signup API to aid assignment of roles and access of protected pages
 * :Authorization
 */

/**
 * Import App modules
 */
const db = require("../database/models/index");

/**
 * :Roles
 * :User
 */
const ROLES = db.ROLES;
const User = db.user;

/**
 * Checking if phone already exist!
 */
checkDuplicatePhone = (req,res,next)=>{
    User.findOne({
        where:{
            phone: req.body.phone,
        }
    })
    .then((user)=>{
        if(user){
            res
            .status(400)
            .send({
                message: "User already exist!"
            });
            return;
        }
        next();
    });
};

/**
 * Checking if role exist!
 */
checkRoleExisted = (req,res,next)=>{
    if(req.body.roles){
        for(let i=0; i<req.body.roles; i++){
            if(!ROLES.includes(req.body.roles[i])){
                res
                .status(400)
                .send({
                    message: `Failed! ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }
    next();
};

/**
 * VerifySignUp object
 */
const VerifySignUp = {
    checkDuplicatePhone: checkDuplicatePhone,
    checkRoleExisted: checkRoleExisted,
}

/**
 * Export verifySignUp
 */
module.exports = VerifySignUp;

