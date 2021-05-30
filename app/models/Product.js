const Sequelize = require('sequelize');
var sequelize = require('../../database/connection'); //sequelize instance


module.exports = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: Sequelize.STRING,
    sku: {
        type: Sequelize.STRING
    },
    unit_price:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    supplier_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});