'use strict';
module.exports = (sequelize, DataTypes) => {
    var Account = sequelize.define('Accounts', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.CHAR(256),
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'last_name'
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'date_of_birth'
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
        banned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        bannedUntil: {
            type: DataTypes.DATEONLY,
            field: 'banned_until'
        }
    }, {
        underscored: true
    });
    Account.associate = function(models) {
        // associations can be defined here
    };
    return Account;
};
