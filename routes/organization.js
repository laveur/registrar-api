var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
    db.Organization.findById(1).then(organization => {
        res.json(organization.get());
    });
});

router.put('/', function(req, res, next) {
    db.Organization.findById(1).then(organization => {
        // TODO: Update Organization
        res.json(organization.get());
    });
});

module.exports = router;
