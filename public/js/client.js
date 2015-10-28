var host = window.location.origin;

function start() {
	var socket = io.connect(host);

	// receive errors from debug-console.js via server.js
	socket.on('err', function(data) {
		//logError(data);
	});

	// did we receive a sketch?
	socket.on('newPair', function (data) {
		var chtext = '<img src="'+data.clickhole.image+'" width="480px" /><br/><h2>'+data.clickhole.text+'</h2>';
		var cttext = '<img src="'+data.clickotron.image+'" width="480px" /><br/><h2>'+data.clickotron.text+'</h2>';
		$("#main_left").html(data.ctLeft ? cttext : chtext);
		$("#main_right").html(data.ctLeft ? chtext : cttext);
		$("#main_left").css('background-color', "");
		$("#main_right").css('background-color', "");
		$("#result").html("<h3>"+(data.result ? "Correct!" : "Wrong!")+' <a href="javascript:requestNewPair()">Next</a></h3>');
	});

	socket.on('answerResult', function(data) {
		$(data.side?"#main_left":"#main_right").css('background-color', data.result ? "green" : "red");
		$("#result").html("<h3>"+(data.result ? "Correct!" : "Wrong!")+' <a href="javascript:requestNewPair()">Next</a></h3>');
	});

};

function requestNewPair() {
	var socket = io.connect(host);
	socket.emit('requestNewPair');
}

function checkAnswer(isLeft) {
	var socket = io.connect(host);
	var data = {answer:isLeft};
	socket.emit('checkAnswer', data);
}

window.onload = function() {
	
};

