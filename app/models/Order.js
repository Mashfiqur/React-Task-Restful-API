const Sequelize = require('sequelize');
var sequelize = require('../../database/connection'); //sequelize instance


module.exports = sequelize.define('Order', {
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
    dispatched_at: { type: Sequelize.DATE, defaultValue: null }
});