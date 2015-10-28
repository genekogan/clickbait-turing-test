var clickotron = [
  {
    url:"http://clickotron.com/article/6648/obama-says-people-still-need-to-get-safe-too",
    image:"http://clickotron.com/images/42145803main.jpg",
    text:"Obama Says People Still Need To Get Safe Too"
  },
  {
    url:"http://clickotron.com/article/6643/the-day-the-gop-hopes-to-deal-with-hate",
    image:"http://clickotron.com/images/32388653main.jpg",
    text:"The Day The GOP Hopes To Deal With Hate"
  },
  {
    url:"http://clickotron.com/article/6640/how-to-make-a-cheese-cake",
    image:"http://clickotron.com/images/7439145main.jpg",
    text:"How To Make A Cheese Cake"
  },
  {
    url:"http://clickotron.com/article/6637/fox-news-host-james-king-to-host-debate",
    image:"http://clickotron.com/images/1078835main.jpg",
    text:"Fox News Host James King To Host Debate"
  },
  {
    url:"http://clickotron.com/article/6634/the-power-of-golf-part-ii",
    image:"http://clickotron.com/images/10436689main.jpg",
    text:"The Power Of Golf: Part II"
  },
  {
    url:"http://clickotron.com/article/6631/photos-great-met-model-experience",
    image:"http://clickotron.com/images/7078196main.png",
    text:"PHOTOS: Great Met Model Experience"
  },
  {
    url:"http://clickotron.com/article/6630/what-makes-a-2016-run-in-the-woods-a-great-4-year-search-for",
    image:"http://clickotron.com/images/31851152main.jpg",
    text:"What Makes A 2016 Run In The Woods? A Great 4 Year Search For A Disaster"
  },
  {
    url:"http://clickotron.com/article/6626/34-year-old-celebrity-may-avoid-the-return-of-true-blood",
    image:"http://clickotron.com/images/9266495main.jpg",
    text:"34-Year-Old Celebrity May Avoid The Return Of True Blood"
  },
  {
    url:"http://clickotron.com/article/6625/42-of-the-most-powerful-photos-of-the-week",
    image:"http://clickotron.com/images/4460786main.jpg",
    text:"42 Of The Most Powerful Photos Of The Week"
  },
  {
    url:"http://clickotron.com/article/6619/fox-news-hosts-photo-talk-with-hillary-clinton",
    image:"http://clickotron.com/images/10043045main.jpg",
    text:"Fox News Host's Photo Talk With Hillary Clinton"
  },
  {
    url:"http://clickotron.com/article/6616/justin-bieber-tries-to-keep-twitter-and-miley-cyrus-on-his-f",
    image:"http://clickotron.com/images/3483418main.jpg",
    text:"Justin Bieber Tries To Keep Twitter And Miley Cyrus On His Face In London"
  },
  {
    url:"http://clickotron.com/article/5607/new-president-is-hours-away-from-royal-pregnancy",
    image:"http://clickotron.com/images/31971285main.jpg",
    text:"New President Is 'Hours Away' From Royal Pregnancy"
  },
  {
    url:"http://clickotron.com/article/6614/obamas-special-election-ends-in-child-support",
    image:"http://clickotron.com/images/29696986main.jpg",
    text:"Obama's Special Election Ends In Child Support"
  }
];


var clickhole = [
  {
    url:"http://www.clickhole.com/article/pc-culture-run-amok-school-majority-black-3361",
    image:"http://i.onionstatic.com/clickhole/2138/8/16x9/1600.jpg",
    text:"PC Culture Run Amok? This School Is Majority Black"
  },
  {
    url:"http://www.clickhole.com/video/jonah-hill-and-channing-tatum-have-best-bromance-e-3414",
    image:"http://i.onionstatic.com/clickhole/2138/7/16x9/600.jpg",
    text:"Jonah Hill and Channing Tatum Have The Best Bromance Ever"
  },
  {
    url:"http://www.clickhole.com/quiz/please-take-2-minutes-and-complete-beverage-pleasu-3363",
    image:"http://i.onionstatic.com/clickhole/2139/3/16x9/1600.jpg",
    text:"Please Take 2 Minutes And Complete This Beverage Pleasure Survey"
  },
  {
    url:"http://www.clickhole.com/article/sandra-bullock-perfectly-shut-down-reporter-who-as-3261",
    image:"http://i.onionstatic.com/clickhole/2140/1/16x9/1600.jpg",
    text:"Sandra Bullock Perfectly Shut Down A Reporter Who Asked Her For A Haircut"
  },
  {
    url:"http://www.clickhole.com/article/awesome-sign-tells-people-exactly-where-tomatoes-a-3251",
    image:"http://i.onionstatic.com/clickhole/2139/0/16x9/1600.jpg",
    text:"Awesome! This Sign Tells People Exactly Where The Tomatoes Are"
  },
  {
    url:"http://www.clickhole.com/blogpost/im-finally-ready-apologize-causing-columbia-shuttl-3271",
    image:"http://i.onionstatic.com/clickhole/2139/1/16x9/1600.jpg",
    text:"I’m Finally Ready To Apologize For Causing The Columbia Shuttle Disaster With My Bow And Arrow"
  },
  {
    url:"http://www.clickhole.com/blogpost/folks-i-am-back-doghouse-3273",
    image:"http://i.onionstatic.com/clickhole/2137/4/16x9/1600.jpg",
    text:"Folks, I Am Back In The Doghouse"
  },
  {
    url:"http://www.clickhole.com/article/tree-legs-leaves-no-longer-kicks-when-you-go-near--3226",
    image:"http://i.onionstatic.com/clickhole/2136/7/16x9/1600.jpg",
    text:"The Tree With Legs For Leaves No Longer Kicks When You Go Near It, Which Means That Fall Is Officially Here"
  },
  {
    url:"http://www.clickhole.com/article/worry-your-mom-sending-her-these-pictures-paris-ca-3257",
    image:"http://i.onionstatic.com/clickhole/2136/0/16x9/1600.jpg",
    text:"Worry Your Mom By Sending Her These Pictures Of The Paris Catacombs With Captions Claiming You Live There"
  }
];


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var idxClickhole;
var idxClickotron;
var ctLeft;

function getData() {
  idxClickhole = Math.floor(clickhole.length * Math.random());
  idxClickotron = Math.floor(clickotron.length * Math.random());
  ctLeft = Math.random() < 0.5;
	var data = {clickhole:clickhole[idxClickhole], clickotron:clickotron[idxClickotron], ctLeft:ctLeft};
	return data;
}

io.on('connection', function (socket) {
	console.log("Initialize Socket");

  	// this is a request
  	socket.on('requestNewPair', function (data) {
    	socket.emit('newPair', getData());
  	});    
 
 	  socket.on('checkAnswer', function (data) {
      var leftLink = ctLeft ? clickotron[idxClickotron].url : clickhole[idxClickhole].url;
      var rightLink = ctLeft ? clickhole[idxClickhole].url : clickotron[idxClickotron].url;
      socket.emit("answerResult", {result:data.answer==ctLeft, side:data.answer, ctLeft:ctLeft, leftLink:leftLink, rightLink:rightLink});
  	});    
 
    // error handling
    socket.on('err', function (data) {
      	if (data.msg === prevErr.msg && data.num === prevErr.num) {
        	// do nothing
      	} else {
        	socket.broadcast.emit('err', data);
        	prevErr = data;
		}
    });
});

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 5000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});
