var express = require('express');
var app = express();

app.get('/time', function(req, res) {
	res.json({time: Date.now()});
});

var server = app.listen(3001, function() {
	console.log("Api started on port: ", server.address().port);
});
