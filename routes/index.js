var express = require('express');
var router = express.Router();
var homedata = require('../homepage.json');
var avatars = require('../avatars.json');
var page;
var playername;

var azure = require('azure-storage');
var nconf = require('nconf');
nconf.env().file({ file: 'config.json'});
var accountName = nconf.get("STORAGE_NAME");
var accountKey = nconf.get("STORAGE_KEY");

var tableService = azure.createTableService(accountName, accountKey);
tableService.createTableIfNotExists('players', function(error, result, response){
  if(!error){
    // result contains true if created; false if already exists
  }
});

var blobService = azure.createBlobService(accountName, accountKey);
blobService.createContainerIfNotExists('profilepics', {publicAccessLevel : 'blob'}, function(error, result, response){
    if(!error){
        // if result = true, container was created.
        // if result = false, container already existed.
    }
});

//get playername cookie
function getPlayerName(req, res){
	if(req.cookies.playername){
		playername = req.cookies.playername;
    res.cookie('playername', playername, { expires: new Date(Date.now() + 900000), httpOnly: true });
  }
  else{
    playername = undefined;
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
  var query = new azure.TableQuery();
  tableService.queryEntities('daypoints',query, null, function(error1, result1, response1) {
    if(!error1) {
      tableService.queryEntities('weekpoints',query, null, function(error2, result2, response2) {
        if(!error2) {
          tableService.queryEntities('monthpoints',query, null, function(error3, result3, response3) {
            if(!error3) {
              tableService.queryEntities('yearpoints',query, null, function(error4, result4, response4) {
                if(!error4) {
                  tableService.queryEntities('alltimepoints',query, null, function(error5, result5, response5) {
                    if(!error5) {
                      var today = result1.entries;
                      var week = result2.entries;
                      var month = result3.entries;
                      var year = result4.entries;
                      var alltime = result5.entries;
                      getPlayerName(req, res);  
                      res.render('index', { 
                        title: 'Leaderboard',
                        page: 'leaderboards',
                        playername: playername,
                        today: today,
                        week: week,
                        month: month,
                        year: year,
                        alltime: alltime 
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
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
  var avatararray = [];
  avatararray = avatars.avatars;
  getPlayerName(req, res);	
  res.render('index', { 
  	title: 'Create Profile',
  	page : 'signup',
  	playername: playername,
    avatars: avatararray 
  });
});

/* GET add players page. */
router.get('/players', function(req, res, next) {
  var query = new azure.TableQuery();
  tableService.queryEntities('players',query, null, function(error, result, response) {
    if(!error) {
      var avatararray = [];
      result.entries.forEach(function(player){
        avatararray.push(blobService.getUrl("profilepics", player.Avatar._));
      });
      console.log(avatararray);
      var players = result.entries;
      getPlayerName(req, res);  
      res.render('index', { 
        title: 'List of Players',
        page: 'players',
        playername: playername,
        players: players,
        avatars: avatararray  
      });
    }
  });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  var query = new azure.TableQuery()
    .top(1)
    .where('PartitionKey eq ?', req.cookies.playername);
  tableService.queryEntities('players',query, null, function(error, result, response) {
    if(!error) {
      console.log(result.entries[0]);
      var blobUrl = blobService.getUrl("profilepics", result.entries[0].Avatar._);
      getPlayerName(req, res);  
      res.render('index', { 
        title: 'Profile',
        page: 'profile',
        playername: playername,
        avatar: blobUrl,
        info: result.entries[0]  
      });
    }
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
  var date = new Date();
  var now = date.getTime();
  console.log(now);
  var week = 604800000;
  var weekAhead = now + week;
  var query = new azure.TableQuery().where('RowKey lt ?', weekAhead.toString());
  var combinedQuery = query.and('RowKey gt ?', now.toString());
  var rotationQuery = new azure.TableQuery().where('RowKey gt ?', now.toString());
  tableService.queryEntities('rotation',rotationQuery, null, function(error, result, response) {
    if(!error) {
      var currentRotation;
      var currentForumOwner;
      tableService.queryEntities('rotation',combinedQuery, null, function(error1, result1, response1) {
        if(!error1) {
          currentForumOwner = result1.entries[0].PlayerName._;
          currentRotation = result1.entries[0].Rotation._;
          var avatarQuery = new azure.TableQuery().where('PartitionKey eq ?', currentForumOwner);
          tableService.queryEntities('players',avatarQuery, null, function(error2, result2, response2) {
            if(!error2) {
              console.log(result2.entries);
              var blobUrl = blobService.getUrl("profilepics", result2.entries[0].Avatar._);
              var weeks = result.entries;
              getPlayerName(req, res);  
              res.render('index', { 
                title: 'Forum Owner of the Week',
                page: 'forumowner',
                playername: playername,
                weeks: weeks,
                currentRotation: currentRotation,
                currentForumOwner: currentForumOwner,
                avatar: blobUrl  
              });
            }
          });
        }
      });
    }
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
  var entGen = azure.TableUtilities.entityGenerator;
  var task = {
    PartitionKey: entGen.String(req.body.playername),
    RowKey: entGen.String(req.body.password),
    Stackoverflow: entGen.String(req.body.stackoverflow),
    MSDN: entGen.String(req.body.msdn),
    Alias: entGen.String(req.body.alias),
    ForumOwner: entGen.String(req.body.forumowner),
    Avatar: entGen.String(req.body.avatar + ".png") 
  };

  tableService.insertEntity('players',task, function (error, result, response) {
    if(!error){
      // Entity inserted
    }
  });

  res.redirect('/');
});

/* POST sign in */
router.post('/signin',function(req,res){
  console.log("signin pressed")
  tableService.retrieveEntity('players', req.body.playername, req.body.password, function(error, result, response){
    if(!error){
      console.log('valid username and password');
      res.cookie('playername', req.body.playername, { expires: new Date(Date.now() + 900000), httpOnly: true });
    }else{
      console.log(error);
    }
    res.redirect('/');
  });
  
});

/* POST sign out */
router.post('/signout',function(req,res){
  res.clearCookie('playername', { expires: new Date(Date.now() + 900000), httpOnly: true });
  playername = undefined;
  res.redirect('/');
});

module.exports = router;
