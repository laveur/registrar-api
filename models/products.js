'use strict';

module.exports = (sequelize, DataTypes) => {
    var Products = sequelize.define('Products', {
        productName:{
             type: DataTypes.STRING,
             allowNull: false
        },
        productDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productPrice: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: '0.00'
        }
    }, {
        underscored: true,
    });
    Products.associate = function(models) {
        Products.hasOne(models.ProductTypes);
    };
    return Products;
};
