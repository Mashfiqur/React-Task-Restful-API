const Sequelize = require('sequelize');
var sequelize = require('../../database/connection'); //sequelize instance


module.exports = sequelize.define('Package', {
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
    }
});