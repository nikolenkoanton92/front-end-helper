var express = require('express');
var router = express.Router();

router.get('/chrome-tabs', function(req, res) {
  res.render('tabs/chrome-tabs/chrome-tabs', {
    layout: '/tabs/chrome-tabs/layout'
  });
});

module.exports = router;
