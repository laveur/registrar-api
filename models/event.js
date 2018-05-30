'use strict';
module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('Event', {
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tagline: DataTypes.STRING,
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        registrationOpens: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        registrationCloses: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        underscored: true,
    });
    Event.associate = function(models) {
        Event.belongsToMany(models.MembershipTiers, {through: models.EventMembershipTiers});
    };
    return Event;
};
