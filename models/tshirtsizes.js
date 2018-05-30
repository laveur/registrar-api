'use strict';
module.exports = (sequelize, DataTypes) => {
    var TshirtSizes = sequelize.define('TshirtSizes', {
        value: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
    });
    TshirtSizes.associate = function(models) {
        // associations can be defined here
    };
    return TshirtSizes;
};
