var express = require('express');
var router = express.Router();

router.get('/macbook-pro', function(req, res) {
  res.render('elements/macbook-pro/macbook-pro', {
    layout: '/elements/macbook-pro/layout'
  });
});

router.get('/directional-arrows', function(req, res) {
  res.render('elements/directional-arrows/index', {
    layout: '/elements/directional-arrows/layout'
  });
});

router.get('/shaped-title', function(req, res) {
  res.render('elements/shaped-title/index', {
    layout: '/elements/shaped-title/layout'
  });
});

module.exports = router;
