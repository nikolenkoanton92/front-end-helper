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

router.get('/sliding-radio-button-menu', function(req, res) {
  res.render('animation/sliding-radio-button-menu/index', {
    layout: '/animation/sliding-radio-button-menu/layout'
  });
});

module.exports = router;
