'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    is_supplier: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: null }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};


// For completing the migrations for database just write in the terminal:
// ***sequelize db:migrate***
