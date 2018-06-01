'use strict';
module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('Event', {
        eventName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'event_name'
        },
        tagline: DataTypes.STRING,
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'start_date'
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'end_date'
        },
        registrationOpens: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'registration_opens'
        },
        registrationCloses: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'registration_closes'
        }
    }, {
        underscored: true,
    });
    Event.associate = function(models) {
        Event.hasMany(models.MembershipTier);
    };
    return Event;
};
