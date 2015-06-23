var createStore = require('fluxible/addons').createStore;

module.exports = createStore({
	storeName: 'TimeStore',
	handlers: {
		'UPDATE_TIME_SUCCESS': '_updateTime',
		'UPDATE_TIME_FAILURE': '_error'
	},
	initialize: function() {
		this.time = 0;
	},
	_updateTime: function(time) {
		this.time = time;
		this.emitChange();
	},
	_error: function() {
		this.time = 'unknown';
		this.emitChange();
	},
	getAll: function() {
		return this.time;
	},
	dehydrate: function() {
		return {
			time: this.time
		};
	},
	rehydrate: function(state) {
		this.time = state.time;
	}
});
