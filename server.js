/* Unix timserver Api
 * Things to do
 	Error handling for bad requests
 	Other Error handling and exception handling
 */

var express = require('express');
var path = require('path');
var app = express();

app.get('/:timeString', function (request, response) {
	var timeString = request.params.timeString;
	var parsedDate = new Date(timeString);
    var isValid = (parsedDate.toString() === 'Invalid Date'? false: true);
    if(!isValid){
    	parsedDate = new Date(+timeString);
    	isValid = (parsedDate.toString() === 'Invalid Date'? false: true);
    }

	var timeObj = {};
	if(isValid){
		timeObj['unix'] = parsedDate.getTime();
		timeObj['natural'] = parsedDate.toDateString();
	}
	else{
		timeObj['unix'] = null;
		timeObj['natural'] = null;
	}
	response.setHeader('Content-Type','application/json');
	response.send(JSON.stringify(timeObj));
});

// app.all('*', function(request, response) {
// 	throw new Error("Bad Request");
// });

// app.use(function(e, request, response, next){
// 	if (e.message === "Bad request") {
// 	        response.status(400).json({error: {msg: e.message, stack: e.stack}}).send();
// 	}
// });

app.listen(3000, function () {
	console.log(path.relative('/workspaces/fcc','/workspaces/fcc'));
	console.log(path.relative('../', '.'));
	console.log('Timeserver listening on port 3000!');
});
