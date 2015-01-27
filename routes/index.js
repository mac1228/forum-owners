var express = require('express');
var router = express.Router();
var homepage = require('../homepage.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Welcome to Forum Owners!',
  	home : homepage
  });
});

/* GET leaderboard page. */
router.get('/leaderboard', function(req, res, next) {
  res.render('index', { title: 'Leaderboard' });
});

/* GET forum health page. */
router.get('/health', function(req, res, next) {
  res.render('index', { title: 'Forum Health' });
});

/* GET question aggregator page. */
router.get('/questions', function(req, res, next) {
  res.render('index', { title: 'Question Aggregator' });
});

/* GET add players page. */
router.get('/addplayers', function(req, res, next) {
  res.render('index', { title: 'Add Players' });
});

/* GET add players page. */
router.get('/playerslist', function(req, res, next) {
  res.render('index', { title: 'List of Players' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('index', { title: 'Profile' });
});

/* GET tournament page. */
router.get('/tournament', function(req, res, next) {
  res.render('index', { title: 'Tournament' });
});

/* GET teams page. */
router.get('/teams', function(req, res, next) {
  res.render('index', { title: 'Teams' });
});

/* GET challenges page. */
router.get('/challenges', function(req, res, next) {
  res.render('index', { title: 'Challenges' });
});

/* GET List of Achievements page. */
router.get('/achievements', function(req, res, next) {
  res.render('index', { title: 'List of Achievements' });
});

/* GET Forum Owner of the Week page. */
router.get('/forumowner', function(req, res, next) {
  res.render('index', { title: 'Forum Owner of the Week' });
});

/* GET Canned Responses page. */
router.get('/cannedresponses', function(req, res, next) {
  res.render('index', { title: 'Canned Responses' });
});

/* GET Tracked Forums page. */
router.get('/trackedforums', function(req, res, next) {
  res.render('index', { title: 'Tracked Forums' });
});

/* GET Forum Owner Schedule page. */
router.get('/forumownerscedule', function(req, res, next) {
  res.render('index', { title: 'Forum Owner Schedule' });
});

/* GET How this works page. */
router.get('/howthisworks', function(req, res, next) {
  res.render('index', { title: 'How this works' });
});

/* GET Roles and Responsibilities page. */
router.get('/responsibilities', function(req, res, next) {
  res.render('index', { title: 'Roles and Responsibilities' });
});

/* GET Prize of the Month page. */
router.get('/prize', function(req, res, next) {
  res.render('index', { title: 'Prize of the Month!' });
});

/* GET Log in/Sign up page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Log in/Sign up' });
});

/* GET Log in/Sign up page. */
router.get('/timeline', function(req, res, next) {
  res.render('index', { title: 'Timeline' });
});

module.exports = router;
