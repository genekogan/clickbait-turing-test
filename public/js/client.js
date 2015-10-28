var host = window.location.origin;

function start() {
	var socket = io.connect(host);

	// receive errors from debug-console.js via server.js
	socket.on('err', function(data) {
		//logError(data);
	});

	// did we receive a sketch?
	socket.on('newPair', function (data) {
		var chtext = '<img src="'+data.clickhole.image+'" width="480px" /><br/><h3>'+data.clickhole.text+'</h3>';
		var cttext = '<img src="'+data.clickotron.image+'" width="480px" /><br/><h3>'+data.clickotron.text+'</h3>';
		$("#main_left_image").html(data.ctLeft ? cttext : chtext);
		$("#main_right_image").html(data.ctLeft ? chtext : cttext);
		$("#main_left_details").html('');
		$("#main_right_details").html('');
		$("#main_left").css('background-color', "");
		$("#main_right").css('background-color', "");
		$("#result").html('');
	});

	socket.on('answerResult', function(data) {
		$("#main_left_details").html('Go to <a href="'+data.leftLink+'">'+(data.ctLeft ? "Clickotron" : "Clickhole")+'</a>');
		$("#main_right_details").html('Go to <a href="'+data.rightLink+'">'+(data.ctLeft ? "Clickhole" : "Clickotron")+'</a>');
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

