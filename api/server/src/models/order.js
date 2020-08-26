'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    active: DataTypes.BOOLEAN,
    table: DataTypes.INTEGER(),
    client: DataTypes.STRING,
    waiter: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
   Order.hasMany(models.ProductsOrder)
  };
  return Order;
};