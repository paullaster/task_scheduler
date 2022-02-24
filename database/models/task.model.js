/**
 * Creating sequelize task model
 */
// module.exports = (sequelize, Sequelize) =>{
//     const Task = sequelize.define("tasks", {
//         id : {
//             type: Sequelize.INTEGER,
//             primaryKey: true
//         },
//         customer_firstname_name: {
//             type: Sequelize.STRING
//         },
//         customer_last_name: {
//             type: Sequelize.STRING
//         },
//         personnel_firstname_name: {
//             type: Sequelize.STRING
//         },
//         personnel_last_name: {
//             type: Sequelize.STRING
//         },
//         customer_phone: {
//             type: Sequelize.STRING
//         },
//         completed: {
//             type: Sequelize.STRING
//         },
//         status: {
//             type: Sequelize.STRING
//         },
//         gender: {
//             type: Sequelize.STRING
//         },
//         age: {
//              type: Sequelize.INTEGER
//         },
//         mpesa: {
//             type: Sequelize.STRING
//         },
//         comment: {
//             type: Sequelize.STRING
//         },
//         registration: {
//             type: Sequelize.STRING
//         },
//         createdAt: {
//             allowNull: false,
//             defaultValue: new Date(),
//             type: Sequelize.DATE
//           },
//           updatedAt: {
//             allowNull: false,
//             defaultValue: new Date(),
//             type: Sequelize.DATE
//           }
//     });
//     return Task;
// }