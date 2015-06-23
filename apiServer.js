var express = require('express');
var app = express();

app.get('/time', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.json({time: Date.now()});
});

var server = app.listen(3001, function() {
	console.log("Api started on port: ", server.address().port);
});
