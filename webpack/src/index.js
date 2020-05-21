'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './app';


const renderApp = (NextApp) => ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('root')
);

renderApp(App);

if (module.hot) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		renderApp(NextApp);
	})
}