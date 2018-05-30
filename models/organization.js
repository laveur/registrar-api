'use strict';
module.exports = (sequelize, DataTypes) => {
    var Organization = sequelize.define('Organization', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shortName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'short_name'
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'address_line_1'
        },
        addressLine2: {
            type: DataTypes.STRING,
            field: 'address_line_2'
        },
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
            allowNull: false,
            field: 'postal_code'
        },
    }, {
        underscored: true,
        freezeTableName: true,
    });
    Organization.associate = function(models) {
        // associations can be defined here
    };
    return Organization;
};
