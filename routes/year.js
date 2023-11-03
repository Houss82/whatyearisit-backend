var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const date = new Date();
  res.json({ year: date });
});

module.exports = router;
