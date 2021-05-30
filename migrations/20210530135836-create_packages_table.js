'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("packages",{
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      product_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      order_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      quantity:{
          type: Sequelize.BIGINT,
          allowNull: false
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: null }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("packages");
  }
};
