// components/Main.js

var React = require('react');

let Main = React.createClass({
	render: function () {
		return (
			<div className='main-container'>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;
