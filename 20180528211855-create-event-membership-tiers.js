'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('EventMembershipTiers', {
            event_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'Events',
                    key: 'id'
                }
            },
            membershiptiers_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'MembershipTiers',
                    key: 'id'
                }
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
        return queryInterface.dropTable('EventMembershipTiers');
    }
};
