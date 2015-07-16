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

router.get('/animate-timer', function(req, res) {
  res.render('animation/animate-timer/index', {
    layout: '/animation/animate-timer/layout'
  });
});

router.get('/thank-you-animation', function(req, res) {
  res.render('animation/thank-you-animation/index', {
    layout: '/animation/thank-you-animation/layout'
  });
});

module.exports = router;
