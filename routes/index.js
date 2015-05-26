var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tabs', function(req, res, next) {
  res.render('tabs/tabs');
});

router.get('/tabs/chrome-like-tabs', function(req, res, next) {
  res.render('tabs/chrome-like-tabs/chrome-like-tabs');
});

module.exports = router;
