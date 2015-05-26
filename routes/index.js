var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tabs', function(req, res, next) {
  res.render('tabs/tabs', {
    layout: '/tabs/layout'
  });
});

router.get('/tabs/chrome-tabs', function(req, res) {
  res.render('tabs/chrome-tabs/chrome-tabs', {
    layout: '/tabs/chrome-tabs/layout'
  });
});

module.exports = router;
