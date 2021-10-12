var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My personal page for Web 2 (It will get better)' });
});
router.get('/cv', function(req, res, next) {
  res.render('cv', { title: 'Curriculum Vitae' });
});
router.get('/disciplinas', function(req, res, next) {
  res.render('disciplinas', { title: 'Subjects' });
});
router.get('/midia', function(req, res, next) {
  res.render('midia', { title: 'Social Media' });
});

module.exports = router;
