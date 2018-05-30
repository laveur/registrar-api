'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MembershipTiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
          type: Sequelize.STRING
      },
      normal_price: {
          type: Sequelize.DOUBLE,
          allowNull: false,
          defaultValue: '0.00'
      },
      prereg_price: {
          type: Sequelize.DOUBLE,
          allowNull: false,
          defaultValue: '0.00'
      },
      special_price: {
          type: Sequelize.DOUBLE,
          allowNull: false,
          defaultValue: '0.00'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MembershipTiers');
  }
};
