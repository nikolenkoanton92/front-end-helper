var express = require('express');
var router = express.Router();

router.get('/chrome-tabs', function(req, res) {
  res.render('tabs/chrome-tabs/chrome-tabs', {
    layout: '/tabs/chrome-tabs/layout'
  });
});

router.get('/tabs-widget', function(req, res) {
  res.render('tabs/tabs-widget/tabs-widget', {
    layout: '/tabs/tabs-widget/layout'
  });
});

module.exports = router;
