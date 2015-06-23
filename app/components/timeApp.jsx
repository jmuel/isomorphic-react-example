var React = require('react');
var TimeStore = require('../stores/timeStore');
var connectToStores = require('fluxible/addons/connectToStores');
var provideContext = require('fluxible/addons/provideContext');
var UpdateTime = require('../actions/UpdateTime');

var TimeApp = React.createClass({
	contextTypes: {
		executeAction: React.PropTypes.func.isRequired
	},
	timeUpdate: function(e) {
		e.preventDefault();
		this.context.executeAction(UpdateTime);
	},

	render: function() {
		var date = new Date(this.props.time);
		var hours = date.getHours();
		var minutes = '0' + date.getMinutes();
		var seconds = '0' + date.getSeconds();

		var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

		return (
			<div>
				<h1>The current time is {formattedTime}</h1>
				<form action='/' onSubmit={this.timeUpdate}>
					<input type='submit' value='Update Time' />
				</form>
			</div>
		);
	}
});

TimeApp = connectToStores(TimeApp, [TimeStore], function(stores, props) {
	return {
		time: stores.TimeStore.getAll()
	};
});

TimeApp = provideContext(TimeApp);

module.exports = TimeApp;
