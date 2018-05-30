'use strict';
module.exports = (sequelize, DataTypes) => {
    var ProductType = sequelize.define('ProductTypes', {
        value: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING
    }, {
        underscored: true
    });
    ProductType.associate = function(models) {
        // associations can be defined here
    };
    return ProductType;
};
