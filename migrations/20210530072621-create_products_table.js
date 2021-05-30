'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("products",{
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        set(val) {
          this.setDataValue('title', val.toUpperCase());
        }
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      unit_price:{
        type: Sequelize.FLOAT,
        allowNull: false
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: null }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("products");
  }
};
