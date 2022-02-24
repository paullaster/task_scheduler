/**
 * Creating Sequelize user model
 * @param {*} sequelize 
 * @param {*} Sequelize 
 * @returns 
 */
module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("users",{
        phone :{
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: Sequelize.DATE
          }
    });
    return User;
}