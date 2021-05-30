const Sequelize = require('sequelize');
var sequelize = require('../../database/connection'); //sequelize instance


module.exports = sequelize.define('Company', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING
});

//   Create Migration through this command if installed globally sequelize-cli
//    ****sequelize migration:create --name create_companies_table***