var host = window.location.origin;

function start() {
	var socket = io.connect(host);

	// receive errors from debug-console.js via server.js
	socket.on('err', function(data) {
		//logError(data);
	});

	// did we receive a sketch?
	socket.on('newPair', function (data) {
		console.log('sketch data is there!! and it says ');
		console.log(data.data2);
		console.log(data.data);
	});
};

function testFunc() {
	var socket = io.connect(host);
	socket.emit('getNewPair');
}

function testFunc2() {
	var socket = io.connect(host);
	var data = {answer1:"my ans1", answer2:"my ans2"};
	socket.emit('checkAnswer', data);
}

window.onload = function() {
	
};

