'use strict';
module.exports = (sequelize, DataTypes) => {
    var MembershipTiers = sequelize.define('MembershipTiers', {
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
                defaultValue: 0.00
            },
            preregPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0.00
            },
            specialPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0.00
            }
        }, {
            underscored: true,
        });
        MembershipTiers.associate = function(models) {
            MembershipTiers.belongsToMany(models.Event, {through: models.EventMembershipTiers});
        };
        return MembershipTiers;
    };
