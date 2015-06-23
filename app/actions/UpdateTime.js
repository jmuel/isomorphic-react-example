var superagent = require('superagent');
var TimeStore = require('../stores/timeStore.js');

module.exports = function(context, payload, done) {
	context.dispatch('UPDATE_TIME');
	superagent
		.get('http://localhost:3001/time')
		.end(function(err, res) {
			if(res.ok) {
				context.dispatch('UPDATE_TIME_SUCCESS', res.body.time);
			} else {
				context.dispatch('UPDATE_TIME_FAILURE');
			}
			done();
		});
};

