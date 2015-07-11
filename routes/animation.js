var express = require('express');
var router = express.Router();

router.get('/animation-menu', function(req, res) {
  res.render('animation/animation-menu/animation-menu', {
    layout: '/animation/animation-menu/layout'
  });
});

router.get('/alternative-js-clock', function(req, res) {
  res.render('animation/alternative-js-clock/alternative-js-clock', {
    layout: '/animation/alternative-js-clock/layout'
  });
});

router.get('/reloj', function(req, res) {
  res.render('animation/reloj/index', {
    layout: '/animation/reloj/layout'
  });
});

module.exports = router;
