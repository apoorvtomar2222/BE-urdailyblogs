var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/../views/writeanarticle.html'));
});

router.get('/writenews', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/../views/writeanews.html'));
});

module.exports = router;
