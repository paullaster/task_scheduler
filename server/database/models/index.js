/**
 * Initializing sequelize
 */
/**
 * importing database configuration and requiring sequelize
 */
const db_config = require("../db_config");
const Sequelize = require("sequelize");

/**
 * Creating a new sequelize instance
 */
 const sequelize = new Sequelize(
     db_config.database,
     db_config.user,
     db_config.password,
     {
         host: db_config.host,
         dialect: db_config.dialect,
         pool:{
             max: db_config.pool.max,
             min: db_config.pool.min,
             acquire: db_config.pool.acquire,
             idle: db_config.pool.idle
         }
     }
 );

 /**
  * Import Users & Roles models
  */
 const db ={};
 db.Sequelize = Sequelize;
 db.sequelize = sequelize;
db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);

/**
 * One user can have several roles
 * One role can be taken on by many users
 * 
 * Creating new table "user_roles" to connect users and roles table via
 * thier primary keys
 */
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
db.ROLES = ["admin"];


/**
 * Exporting db
 */
module.exports = db;
