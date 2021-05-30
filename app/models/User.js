const Sequelize = require('sequelize');
var sequelize = require('../../database/connection'); //sequelize instance
module.exports = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    is_supplier: { type: Sequelize.BOOLEAN, defaultValue: false },
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

  });

//   Create Migration through this command if installed globally sequelize-cli
//    ****sequelize migration:create --name create_users_table***
  