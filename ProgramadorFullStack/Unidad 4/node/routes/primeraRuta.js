var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('primeraRuta');//primeraRuta.hbs
  // res.render('index', { title: 'Diego' });
});

module.exports = router;
