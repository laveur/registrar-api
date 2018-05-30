'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('TshirtSizes', [
            {
                value: 'XS',
                name: 'Extra Small',
                description: 'Extra Small'
            },
            {
                value: 'S',
                name: 'Small',
                description: 'Small'
            },
            {
                value: 'M',
                name: 'Medium',
                description: 'Medium'
            },
            {
                value: 'L',
                name: 'Large',
                description: 'Large'
            },
            {
                value: 'XL',
                name: 'Extra Large',
                description: 'Extra Large'
            },
            {
                value: 'XXL',
                name: 'Extra Extra Large',
                description: 'Extra Extra Large'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('TshirtSizes', null, {});

    }
};
