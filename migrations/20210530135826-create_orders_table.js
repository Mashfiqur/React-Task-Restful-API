'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders",{
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: Sequelize.STRING,
      order_placed_company_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      supplier_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      is_dispatched: { type: Sequelize.BOOLEAN, defaultValue: false },
      dispatched_at: { type: Sequelize.DATE, defaultValue: null },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: null }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("orders");
  }
};
