'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ProductTypes', [
            {
                value: 'ITEM',
                name: 'Item',
                description: 'A generic item'
            },
            {
                value: 'DONATION',
                name: 'Donation',
                description: 'A donation'
            },
            {
                value: 'GIFT',
                name: 'Gift',
                description: 'A gift from us'
            },
            {
                value: 'TICKET',
                name: 'Ticket',
                description: 'A Ticket'
            },
            {
                value: 'TSHIRT',
                name: 'T-Shirt',
                description: 'Convention T-Shirt'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ProductTypes', null, {});
    }
};
