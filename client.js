var React = require('react');
var app = require('./app/app');

var dehydratedState = window.App;
window.React = React;
console.log(dehydratedState);

app.rehydrate(dehydratedState, function(err, context) {
	if(err) {
		throw err;
	}
	window.context = context;
	var mountNode = document.getElementById('root');

	React.render(context.createElement(), mountNode);
});
