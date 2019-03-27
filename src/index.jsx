import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createHashHistory } from 'history';
let history = createHashHistory();


import Main from './components/Main.jsx';
import reducer from './reducers'
import storage from './storage';

storage.init();

const store = createStore(reducer, storage.get());

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Main />
		</Router>
	</Provider>
), document.querySelector('#root'));