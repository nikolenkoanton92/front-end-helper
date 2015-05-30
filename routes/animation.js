var express = require('express');
var router = express.Router();

router.get('/animation-menu', function(req, res) {
  res.render('animation/animation-menu/animation-menu', {
    layout: '/animation/animation-menu/layout'
  });
});

module.exports = router;
