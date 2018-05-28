var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    res.status(401);
    res.send('Not Authenticated');
})

module.exports = router;
