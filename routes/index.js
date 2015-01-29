var express = require('express');
var router = express.Router();
var homedata = require('../homepage.json');
var page;
var playername;

//get playername cookie
function getPlayerName(req, res){
	if(req.cookies.playername){
		playername = req.cookies.playername;
    	res.cookie('playername', playername, { expires: new Date(Date.now() + 900000), httpOnly: true });
  	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var homearray = [];
  homearray = homedata.home;
  getPlayerName(req, res);
  res.render('index', { 
  	title: 'Welcome to Forum Owners',
  	homeblocks : homearray,
  	page : 'home',
  	playername: playername
  });
});

/* GET leaderboard page. */
router.get('/leaderboards', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Leaderboard',
  	page : 'leaderboards',
  	playername: playername
  });
});

/* GET forum health page. */
router.get('/health', function(req, res, next) {  
  getPlayerName(req, res);	
  res.render('index', { 
    title: 'Forum Health',
    page : 'health',
    playername: playername 
  });
});

/* GET question aggregator page. */
router.get('/questions', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Question Aggregator',
  	page : 'questions',
  	playername: playername 
  });
});

/* GET Sign up page. */
router.get('/signup', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Create Profile',
  	page : 'signup',
  	playername: playername 
  });
});

/* GET add players page. */
router.get('/players', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'List of Players',
  	page : 'players',
  	playername: playername 
  });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Profile',
  	page: 'profile',
  	playername: playername 
  });
});

/* GET tournament page. */
router.get('/tournament', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Tournament',
  	page: tournament,
  	playername: playername 
  });
});

/* GET teams page. */
router.get('/teams', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Teams', 
  	page: 'teams',
  	playername: playername
  });
});

/* GET challenges page. */
router.get('/challenges', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Challenges',
  	page: 'challenges',
  	playername: playername 
  });
});

/* GET List of Achievements page. */
router.get('/achievements', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'List of Achievements',
  	page: 'achievements',
  	playername: playername 
  });
});

/* GET Forum Owner of the Week page. */
router.get('/forumowner', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Forum Owner of the Week',
  	page: 'forumowner',
  	playername: playername 
  });
});

/* GET Canned Responses page. */
router.get('/cannedresponses', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Canned Responses',
  	page: 'cannedresponses',
  	playername: playername 
  });
});

/* GET Tracked Forums page. */
router.get('/trackedforums', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Tracked Forums',
  	page: 'trackedforums',
  	playername: playername 
  });
});

/* GET Forum Owner Schedule page. */
router.get('/schedule', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Forum Owner Schedule',
  	page: 'schedule',
  	playername: playername 
  });
});

/* GET How this works page. */
router.get('/howthisworks', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'How this works',
  	page: 'howthisworks',
  	playername: playername 
  });
});

/* GET Roles and Responsibilities page. */
router.get('/responsibilities', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Roles and Responsibilities',
  	page: 'responsibilities',
  	playername: playername 
  });
});

/* GET Prize of the Month page. */
router.get('/prizes', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Prize of the Month!',
  	page: 'prizes',
  	playername: playername 
  });
});

/* GET Timeline page. */
router.get('/timeline', function(req, res, next) {
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Timeline',
  	page: 'timeline',
  	playername: playername 
  });
});

/* POST create profile. */
router.post('/createprofile',function(req,res){
   res.cookie('playername', req.body.playername, { expires: new Date(Date.now() + 900000), httpOnly: true });
   res.redirect('/');
})

module.exports = router;
