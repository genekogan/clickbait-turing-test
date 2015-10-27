var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

function getData() {
	var data = {data:"hello", data2:"world"};
	return data;
}

io.on('connection', function (socket) {
	console.log("Initialize Socket");

	// this is a request
  	socket.on('getNewPair', function (data) {
    	socket.emit('newPair', getData());
  	});    
 
 	socket.on('checkAnswer', function (data) {
    	console.log("check answer");
    	console.log(data.answer1);
    	console.log(data.answer2);
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
