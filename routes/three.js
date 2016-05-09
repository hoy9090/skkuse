var express = require('express');
var router = express.Router();

/* GET 3d. */
router.get('/', function(req, res, next) {
  res.send('three.jade');
});

module.exports = router;
