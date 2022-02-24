/**
 * Creating Sequelize role model
 * @param {*} sequelize 
 * @param {*} Sequelize 
 * @returns 
 */
module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
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
    return Role;
}