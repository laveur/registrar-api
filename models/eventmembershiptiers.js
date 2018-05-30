'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventMembershipTiers = sequelize.define('EventMembershipTiers', {}, {
    underscored: true,
  });
  EventMembershipTiers.associate = function(models) {
    // associations can be defined here
  };
  return EventMembershipTiers;
};
