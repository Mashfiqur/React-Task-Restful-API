'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("companies",{
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        set(val) {
          this.setDataValue('name', val.toUpperCase());
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: null }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("companies");
  }
};


// For completing the migrations for database just write in the terminal:
// ***sequelize db:migrate***