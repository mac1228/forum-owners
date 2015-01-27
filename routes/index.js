var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET leaderboard page. */
router.get('/leaderboard', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET forum health page. */
router.get('/health', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET question aggregator page. */
router.get('/questions', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET add players page. */
router.get('/players', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET tournament page. */
router.get('/tournament', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET teams page. */
router.get('/teams', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET challenges page. */
router.get('/challenges', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
