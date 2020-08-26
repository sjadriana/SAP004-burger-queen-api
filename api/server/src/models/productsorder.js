'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductsOrder = sequelize.define('ProductsOrder', {
    product_id:DataTypes.INTEGER,
    order_id:DataTypes.INTEGER,
    add_extra: DataTypes.STRING,
    add_type: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  ProductsOrder.associate = function(models) {
    ProductsOrder.belongsTo(models.Order)
    ProductsOrder.belongsTo(models.Product)
  };
  return ProductsOrder;
};