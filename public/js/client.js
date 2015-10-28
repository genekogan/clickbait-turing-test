var host = window.location.origin;

function start() {
	var socket = io.connect(host);

	// receive errors from debug-console.js via server.js
	socket.on('err', function(data) {
		//logError(data);
	});

	// did we receive a sketch?
	socket.on('newPair', function (data) {
		console.log(data);
		var chtext = '<img src="'+data.clickhole.image+'" width="480px" /><br/><h2>'+data.clickhole.text+'</h2>';
		var cttext = '<img src="'+data.clickotron.image+'" width="480px" /><br/><h2>'+data.clickotron.text+'</h2>';
		if (Math.random() < 0.5) {
			$("#main_left").html(chtext);
			$("#main_right").html(cttext);
		}
		else {
			$("#main_left").html(chtext);
			$("#main_right").html(cttext);
		}
	});
};

function doThis() {
	//$("#main_left").html('<img src="http://www.clickotron.com/images/1078835main.jpg"/><br/><h2>Fox News Host James King To Host Debate</h2>');
	//$("#main_right").html('<img src="http://i.onionstatic.com/clickhole/2138/7/16x9/600.jpg"/><br/><h2>Jonah Hill and Channing Tatum Have The Best Bromance Ever</h2>');

	$("#main_left").html('<img src="http://www.clickotron.com/images/1078835main.jpg"/><br/><h2>Fox News Host James King To Host Debate</h2>');
	$("#main_right").html('<img src="http://i.onionstatic.com/clickhole/2138/7/16x9/600.jpg"/><br/><h2>Jonah Hill and Channing Tatum Have The Best Bromance Ever</h2>');


	
}

function getNewPair() {
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

