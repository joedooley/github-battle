let React = require('react');
let ReactDOM = require('react-dom');

let HelloWorld = React.createClass({
	render: function () {
		return (
			<div> Hello World! Is this really working? That's bad ass!!! </div>
		)
	}
});

ReactDOM.render(
	<HelloWorld/>,
	document.getElementById('app')
);

