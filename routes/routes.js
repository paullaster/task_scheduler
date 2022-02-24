/**
 * This is routes file
 * :Login route
 * :Get tasks route
 */

/**
 * importing Router from EXpress
 */
const router = require("express").Router();


// /**
//  * Importing app modules
//  */
//  const db = require("../database/db_config");
//  const config = require('../config/index');


// /**
//  * Routes
//  */
// router.post('/personnel/login', async(req,res,next) =>{
//     try {
//        const user = db.query("SELECT phone, despassword FROM users", (err, res)=>{
//            if(err){
//                console.log({"Message": err});
//            }
//            const {phone, password} = res.rows[0];
//            console.log({password});
//            db.end()
//        });
//       // console.log(res.json(user))
//         //console.log(user);
//         //const {phone, password} = req.body;
//        // console.log(phone, password)
//         // res
//         // .status(200)
//         // .send({phone, password});
        
//     } catch (error) {
//         console.error({"Password": "You have entered an incorrect password!"});
//         res
//         .status(403)
//         .send({"Password": "You have entered an incorrect password!"});
//     }
//     next();
// });

// /**
//  * Export the router
//  */
// module.exports = router;