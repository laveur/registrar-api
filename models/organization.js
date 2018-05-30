'use strict';
module.exports = (sequelize, DataTypes) => {
    var Organization = sequelize.define('Organization', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shortName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressLine2: DataTypes.STRING,
        city: {
            type: DataTypes.CHAR(100),
            allowNull: false
        },
        state: {
            type: DataTypes.CHAR(100),
            allowNull: false,
        },
        country: {
            type: DataTypes.CHAR(100),
            allowNull: false
        },
        postalCode: {
            type: DataTypes.CHAR(30),
            allowNull: false
        },
    }, {
        underscored: true,
    });
    Organization.associate = function(models) {
        // associations can be defined here
    };
    return Organization;
};
