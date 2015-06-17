var createStore = require('fluxible/addons').createStore;

module.exports = createStore({
	storeName: 'TimeStore',
	handlers: {
		'UPDATE_TIME': '_updateTime'
	},
	initialize: function() {
		this.time = 0;
	},
	_updateTime: function(time) {
		this.time = time;
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
	rehydrate: function(stat) {
		this.time = state.time;
	}
});
