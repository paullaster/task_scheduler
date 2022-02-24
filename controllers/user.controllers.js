/**
 * Imports tasks
 * @param {*} req 
 * @param {*} res 
 */
const tasks = require("./tasks.controller");
/**
 * Public access
 * User do not have to be loged in to view this content
 * @param {*} req 
 * @param {*} res 
 */
exports.publiccontent = (req, res)=>{
    res
    .status(200)
    .send("Public content");
}

/**
 * normalloged in user access
 * @param {*} req 
 * @param {*} res 
 */
exports.normalusercontent = (req,res)=>{
    res
    .status(200)
    .send("Normal loged in user content");
}

/**
 * moderator user access
 * @param {*} req 
 * @param {*} res 
 */
exports.moderatorcontent = (req, res)=>{
    res
    .status(200)
    .send("Moderator user content");
}

/**
 *  admin user access
 */
exports.admincontent = (req,res)=>{
    const {page, limit} = req.query;
    res
    .status(200)
    .send({
        tasks: {
        totalTasks: tasks().length,
        page,
        perPage : limit,
        task: tasks()
    }});
}
