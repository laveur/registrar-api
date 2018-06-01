var express = require('express');
var router = express.Router();
var db = require('../models');
var util = require('util');

var validateEventId = function(req, res, next) {
    console.log('event_id: ' + util.inspect(req.params));
    db.Event.findById(req.params.event_id).then(event => {
        if (event == null) {
            res.status(404);
            res.json({message: 'Event Not Found'});
            return
        }

        next();
    });
};

router.use(validateEventId);

router.get('/', function(req, res, next) {
    db.MembershipTier.findAll({where: {event_id: req.params.event_id}}).then(membershipTiers => {
        results = [];
        membershipTiers.forEach(membershipTier => {
            result = membershipTier.get();

            results.push(result);
        });

        res.json({membershipTiers: results});
    });
});

router.post('/', function(req, res, next) {
    data = req.body;
    data.eventId = req.params.event_id;

    db.MembershipTier.create(data).then(membershipTier => {

    });
});

module.exports = router;
