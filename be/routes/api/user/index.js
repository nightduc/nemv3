var createError = require('http-errors');
var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res, next) {
  res.send({ msg:'hello', a: 1 });
});

router.get('/', function(req, res, next) {
  const us = [
    {
      name: '김김김',
      age: 14
    },
    {
      name: '이이이',
      age: 25
    }
  ]
  res.send({users:us});
});

/* GET users listing. */
router.all('*', function(req, res, next) {
  next(createError(404,'No API'));
});

module.exports = router;
