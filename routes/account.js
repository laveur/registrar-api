var express = require('express');
var router = express.Router();
var db = require('../models');
var util = require('util');

router.get('/', function(req, res, next) {
    db.Accounts.findAll().then(accounts => {
        results = [];
        accounts.forEach(function(account) {
            result = account.toJSON();

            results.push(result);
        });

        res.json({accounts: results});
    });
});

router.post('/', function(req, res, next) {
    db.Accounts.create(req.body).then(account => {
        res.status(201);
        res.set('Location', '/account/' + account.id);
        res.json({message: 'Created'});
    }).catch(db.Sequelize.ValidationError, function (error) {
        if (error.name == "SequelizeUniqueConstraintError") {
            res.status(409);
            res.json({message: 'Conflict: Account exists'});
        } else {
            res.status(400);
            res.json({message: 'Bad Request'});
        }
    });
});

router.get('/:id', function(req, res, next) {
    db.Accounts.findById(req.params.id).then(account => {
        if (account != null) {
            res.json(account);
        } else {
            res.status(404);
            res.json({message: 'Account Not Found'});
        }
    });
});

router.put('/:id', function(req, res, next) {
    db.Accounts.findById(req.params.id).then(account => {
        if (account != null) {
            // TODO: Update account
            res.json(account.get());
        } else {
            res.status(404);
            res.json({message: 'Account Not Found'});
        }
    });
});

router.delete('/:id', function(req, res, next) {
    db.Accounts.findById(req.params.id).then(account => {
        if (account != null) {
            return account.destroy();
        } else {
            res.status(404);
            res.json({message: 'Account Not Found'});
        }
    }).then(() => {
        res.json({message: 'Account deleted'});
    });
});

module.exports = router;
