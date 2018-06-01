'use strict';
module.exports = (sequelize, DataTypes) => {
    var MembershipTier = sequelize.define('MembershipTier', {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            normalPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0.00,
                field: 'normal_price'
            },
            presalePrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0.00,
                field: 'presale_price'
            },
            specialPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0.00,
                field: 'special_price'
            }
        }, {
            underscored: true,
        });
        MembershipTier.associate = function(models) {
            MembershipTier.hasMany(models.Event);
        };
        return MembershipTier;
    };
