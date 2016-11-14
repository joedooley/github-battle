// app/index.js
var React    = require('react');
var ReactDOM = require('react-dom');
var routes   = require('./config/routes');
var Raven = require('raven-js');

let sentryKey = 'eea2e9b9ec3c48fab60c312fb00521d7';
let sentryApp = '114001';
let sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

let _APP_INFO = {
	name   : 'Github Battle',
	branch : 'video4',
	version: '1.0'
};

window.onerror = function () {
	Raven.showReportDialog();
};

Raven.config(
	sentryURL, {
		release: _APP_INFO.version,
		tags: {
			branch: _APP_INFO.branch,
		}
	}
).install();

ReactDOM.render(routes, document.getElementById('app'));
