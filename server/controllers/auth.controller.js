/**
 * Signin authentication
 * 
 */
/**
 * Importing libraries
 */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * importing app modules
 */
const db =require("../database/models/index");
const config = require("../config/index");
 

/**
 * User and Roles db
 */
const User = db.user;
const Role = db.role;

/**
 * Signin
 */
exports.signin = (req,res)=>{
    User.findOne({
        where: {
            phone: req.body.phone
        }
    })
    .then((user)=>{
        if(!user){
            return res.status(404).send({
                message: "User does not exist!"
            });
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Inalid password!"
            });
        }
        let token = jwt.sign({
            id: user.id
        },
        
        config.JWT_SECRET,{
            expiresIn: 86400  //24hrs
        });
        let authorities = [];
        user.getRoles()
        .then((roles)=>{
            for(let i=0; i<roles.length; i++){
                [...authorities, `ROLE_ ${roles[i].name.toUpperCase()}`];
            }
            res
            .status(200)
            .send({
                id: user.id,
                phone: user.phone,
                roles: authorities,
                accessToken: token,
            });
        });
    })
    .catch((err) =>{
        console.error({message: err});
        res
        .status(500)
        .send({
            message: err.message
        });
    });
};