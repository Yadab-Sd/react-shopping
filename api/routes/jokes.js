var express = require('express');
var router = express.Router();
var request = require('request');
var store = require('../utils/store');

router.get('/', function (req, res, next) {
  const data = store.getData()
  if (data) {
    res.send(data);
  }
});

module.exports = router;
