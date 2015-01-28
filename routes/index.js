var express = require('express');
var router = express.Router();
var homedata = require('../homepage.json');
var page;

/* GET home page. */
router.get('/', function(req, res, next) {
  var homearray = [];
  homearray = homedata.home;
  res.render('index', { 
  	title: 'Welcome to Forum Owners',
  	homeblocks : homearray,
  	page : 'home'
  });
});

/* GET leaderboard page. */
router.get('/leaderboards', function(req, res, next) {
  res.render('index', { 
  	title: 'Leaderboard',
  	page : 'leaderboards' 
  });
});

/* GET forum health page. */
router.get('/health', function(req, res, next) {
  var username;
  if(req.cookies.username){
    username = req.cookies.username;
    res.cookie('username', username, { expires: new Date(Date.now() + 900000), httpOnly: true });
  }
  res.render('index', { 
    title: 'Forum Health',
    user: username,
    page : 'health' 
  });
});

/* GET question aggregator page. */
router.get('/questions', function(req, res, next) {
  res.render('index', { 
  	title: 'Question Aggregator',
  	page : 'questions' 
  });
});

/* GET Sign up page. */
router.get('/signup', function(req, res, next) {
  res.render('index', { 
  	title: 'Create Profile',
  	page : 'signup' 
  });
});

/* GET add players page. */
router.get('/players', function(req, res, next) {
  res.render('index', { 
  	title: 'List of Players',
  	page : 'players' 
  });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('index', { 
  	title: 'Profile',
  	page: 'profile' 
  });
});

/* GET tournament page. */
router.get('/tournament', function(req, res, next) {
  res.render('index', { 
  	title: 'Tournament',
  	page: tournament 
  });
});

/* GET teams page. */
router.get('/teams', function(req, res, next) {
  res.render('index', { 
  	title: 'Teams', 
  	page: 'teams'
  });
});

/* GET challenges page. */
router.get('/challenges', function(req, res, next) {
  res.render('index', { 
  	title: 'Challenges',
  	page: 'challenges' 
  });
});

/* GET List of Achievements page. */
router.get('/achievements', function(req, res, next) {
  res.render('index', { 
  	title: 'List of Achievements',
  	page: 'achievements' 
  });
});

/* GET Forum Owner of the Week page. */
router.get('/forumowner', function(req, res, next) {
  res.render('index', { 
  	title: 'Forum Owner of the Week',
  	page: 'forumowner' 
  });
});

/* GET Canned Responses page. */
router.get('/cannedresponses', function(req, res, next) {
  res.render('index', { 
  	title: 'Canned Responses',
  	page: 'cannedresponses' 
  });
});

/* GET Tracked Forums page. */
router.get('/trackedforums', function(req, res, next) {
  res.render('index', { 
  	title: 'Tracked Forums',
  	page: 'trackedforums' 
  });
});

/* GET Forum Owner Schedule page. */
router.get('/schedule', function(req, res, next) {
  res.render('index', { 
  	title: 'Forum Owner Schedule',
  	page: 'schedule' 
  });
});

/* GET How this works page. */
router.get('/howthisworks', function(req, res, next) {
  res.render('index', { 
  	title: 'How this works',
  	page: 'howthisworks' 
  });
});

/* GET Roles and Responsibilities page. */
router.get('/responsibilities', function(req, res, next) {
  res.render('index', { 
  	title: 'Roles and Responsibilities',
  	page: 'responsibilities' 
  });
});

/* GET Prize of the Month page. */
router.get('/prizes', function(req, res, next) {
  res.render('index', { 
  	title: 'Prize of the Month!',
  	page: 'prizes' 
  });
});

/* GET Log in/Sign up page. */
router.get('/login', function(req, res, next) {
  res.render('index', { 
  	title: 'Log in/Sign up',
  	page: 'login' 
  });
});

/* GET Log in/Sign up page. */
router.get('/timeline', function(req, res, next) {
  res.render('index', { 
  	title: 'Timeline',
  	page: 'timeline' 
  });
});

router.post('/post',function(req,res){
   console.log(req.body.username); //you will get your data in this as object.
})

module.exports = router;
