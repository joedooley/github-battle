let React    = require('react');
let ReactDOM = require('react-dom');

let USER_DATA = {
	name    : 'Joe Dooley',
	username: 'joedooley',
	image   : 'https://avatars3.githubusercontent.com/u/15069810?v=3&s=460'
};

/**
 * Testing React Components
 *
 * Focused
 * Independent
 * Reusable
 * Small
 * Testable
 */


let ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} alt={this.props.name} style={{height: 100, width: 100}} />
	}
});

let ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username} target={'blank'} title={this.props.name}>
					{this.props.username}
				</a>
			</div>
		);
	}
});

let ProfileName = React.createClass({
	render: function () {
		return <div>{this.props.name}</div>
	}
});

let Avatar = React.createClass({
	render: function () {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} name={this.props.user.name} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} name={this.props.user.name} />
			</div>
		);
	}
});

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);
