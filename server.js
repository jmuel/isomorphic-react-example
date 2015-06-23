require('babel/register');
var express = require('express');
var app = express();
var fluxibleApp = require('./app/app.js');
var UpdateTime = require('./app/actions/UpdateTime');
var serialize = require('serialize-javascript');
var React = require('react');

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	var context = fluxibleApp.createContext({
		req: req
	});

	context.executeAction(UpdateTime, {}, function(err) {
		if(err) {
			res.status(404).send('something went wrong');
		}

		var exposedState = 'window.App=' + serialize(fluxibleApp.dehydrate(context)) + ';';

		var componentContext = context.getComponentContext();
		
		var content = React.renderToString(context.createElement());
	
		res.render('index', {title: 'hello', content: content, appState: exposedState});
	});
});

app.use(express.static('dist'));

var server = app.listen(3000, function() {
	console.log('listening at port: ', server.address().port);
});
