var express = require('express');
var router = express.Router();
var db = require('../models');
var membershipTiersRouter = require('./membershiptiers');

router.get('/', function(req, res, next) {
    db.Event.findAll().then(events => {
        results = [];
        events.forEach(function(event) {
            result = event.toJSON();

            results.push(result);
        });

        res.json({events: results});
    });
});

router.post('/', function(req, res, next) {
    db.Event.create(req.body).then(event => {
        res.status(201);
        res.set('Location', '/events/' + event.id);
        res.json({message: 'Created'});
    }).catch(db.Sequelize.ValidationError, function (error) {
        if (error.name == "SequelizeUniqueConstraintError") {
            res.status(409);
            res.json({message: 'Conflict: Event exists'});
        } else {
            res.status(400);
            res.json({message: 'Bad Request'});
        }
    });
});

router.get('/:id', function(req, res, next) {
    db.Event.findById(req.params.id).then(event => {
        if (event != null) {
            res.json(event.get());
        } else {
            res.status(404);
            res.json({message: 'Event Not Found'})
        }
    });
});

router.put('/:id', function(req, res, next) {
    db.Event.findById(req.params.id).then(event => {
        if (event != null) {
            // TODO: Update account
            res.json(event.get());
        } else {
            res.status(404);
            res.json({message: 'Event Not Found'});
        }
    });
});

router.delete('/:id', function(req, res, next) {
    db.Event.findById(req.params.id).then(event => {
        if (event != null) {
            return event.destroy();
        } else {
            res.status(404);
            res.json({message: 'Event Not Found'});
        }
    }).then(() => {
        res.json({message: 'Event deleted'});
    });
});

router.use('/:event_id/membershiptiers', membershipTiersRouter);

module.exports = router;
