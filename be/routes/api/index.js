var createError = require('http-errors');
var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res, next) {
  res.send({ msg:'hello', a: 1 });
});

/* GET users listing. */
router.all('*', function(req, res, next) {
  next(createError(404,'No API'));
});

module.exports = router;
