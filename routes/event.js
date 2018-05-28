var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200);
    res.json({events: []});
});
router.post('/', function(req, res, next) {
    res.status(201);
    res.send('Created');
});

router.get('/:id', function(req, res, next) {
    res.status(404);
    res.send('Not Found');
});

router.put('/:id', function(req, res, next) {
    res.status(404);
    res.send('Not Found');
});

router.delete('/:id', function(req, res, next) {
    res.status(404);
    res.send('Not Found');
});

module.exports = router;
