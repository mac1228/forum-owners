var express = require('express');
var router = express.Router();
var homedata = require('../homepage.json');
var page;
var alias;

//get alias cookie
function getAlias(req, res){
	if(req.cookies.alias){
		alias = req.cookies.alias;
    	res.cookie('alias', alias, { expires: new Date(Date.now() + 900000), httpOnly: true });
  	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var homearray = [];
  homearray = homedata.home;
  getAlias(req, res);
  res.render('index', { 
  	title: 'Welcome to Forum Owners',
  	homeblocks : homearray,
  	page : 'home',
  	alias: alias
  });
});

/* GET leaderboard page. */
router.get('/leaderboards', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Leaderboard',
  	page : 'leaderboards',
  	alias: alias
  });
});

/* GET forum health page. */
router.get('/health', function(req, res, next) {  
  getAlias(req, res);	
  res.render('index', { 
    title: 'Forum Health',
    page : 'health',
    alias: alias 
  });
});

/* GET question aggregator page. */
router.get('/questions', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Question Aggregator',
  	page : 'questions',
  	alias: alias 
  });
});

/* GET Sign up page. */
router.get('/signup', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Create Profile',
  	page : 'signup',
  	alias: alias 
  });
});

/* GET add players page. */
router.get('/players', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'List of Players',
  	page : 'players',
  	alias: alias 
  });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Profile',
  	page: 'profile',
  	alias: alias 
  });
});

/* GET tournament page. */
router.get('/tournament', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Tournament',
  	page: tournament,
  	alias: alias 
  });
});

/* GET teams page. */
router.get('/teams', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Teams', 
  	page: 'teams',
  	alias: alias
  });
});

/* GET challenges page. */
router.get('/challenges', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Challenges',
  	page: 'challenges',
  	alias: alias 
  });
});

/* GET List of Achievements page. */
router.get('/achievements', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'List of Achievements',
  	page: 'achievements',
  	alias: alias 
  });
});

/* GET Forum Owner of the Week page. */
router.get('/forumowner', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Forum Owner of the Week',
  	page: 'forumowner',
  	alias: alias 
  });
});

/* GET Canned Responses page. */
router.get('/cannedresponses', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Canned Responses',
  	page: 'cannedresponses',
  	alias: alias 
  });
});

/* GET Tracked Forums page. */
router.get('/trackedforums', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Tracked Forums',
  	page: 'trackedforums',
  	alias: alias 
  });
});

/* GET Forum Owner Schedule page. */
router.get('/schedule', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Forum Owner Schedule',
  	page: 'schedule',
  	alias: alias 
  });
});

/* GET How this works page. */
router.get('/howthisworks', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'How this works',
  	page: 'howthisworks',
  	alias: alias 
  });
});

/* GET Roles and Responsibilities page. */
router.get('/responsibilities', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Roles and Responsibilities',
  	page: 'responsibilities',
  	alias: alias 
  });
});

/* GET Prize of the Month page. */
router.get('/prizes', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Prize of the Month!',
  	page: 'prizes',
  	alias: alias 
  });
});

/* GET Timeline page. */
router.get('/timeline', function(req, res, next) {
  getAlias(req, res);	
  res.render('index', { 
  	title: 'Timeline',
  	page: 'timeline',
  	alias: alias 
  });
});

/* POST create profile. */
router.post('/createprofile',function(req,res){
   res.cookie('alias', req.body.alias, { expires: new Date(Date.now() + 900000), httpOnly: true });
   res.redirect('/');
})

module.exports = router;
