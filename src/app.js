import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import ChatUI from './components/ChatUI';
import LoginUI from './components/LoginUI';
import rootReducer from './reducers';

const LoginOrChat = connect(
	(state) => ({
		authorized: state.user.authorized
	})
)(({authorized}) => {
	if (authorized) {
		<ChatUI />
	} else {
		<LoginUI />
	}
})

class App extends Component {
	render() {
		return(
			<Provider store={store}>
				<LoginOrChat />
			</Provider>
		)
	}
}

const loggerMiddleware = createLogger();
const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);