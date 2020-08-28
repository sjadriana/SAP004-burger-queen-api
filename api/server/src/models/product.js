'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    has_extras: DataTypes.BOOLEAN,
    has_burger: DataTypes.BOOLEAN

  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.ProductsOrder,{
      foreignKey: 'productId'
    })
  };
  return Product;
};
