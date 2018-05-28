var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200);
    res.json({name: 'PAL', shortName: 'PAWCon'});
});

router.put('/', function(req, res, next) {
    res.status(200);
    res.json({name: 'PAL', shortName: 'PAWCon'});
});

module.exports = router;
