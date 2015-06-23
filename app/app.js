var Fluxible = require('fluxible');

var app = new Fluxible({
	component: require('./components/timeApp.jsx')
});

app.registerStore(require('./stores/timeStore.js'));

module.exports = app;
