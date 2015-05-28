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

module.exports = router;
