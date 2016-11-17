import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import Raven from 'raven-js'

const sentryKey = 'eea2e9b9ec3c48fab60c312fb00521d7';
const sentryApp = '114001';
const sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

const _APP_INFO = {
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

ReactDOM.render(routes, document.getElementById('app'))
