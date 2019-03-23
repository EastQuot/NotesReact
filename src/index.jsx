import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import reducer from './reducers'
import { Provider } from 'react-redux';
import { createStore } from './redux';
import { createHashHistory } from 'history';
let history = createHashHistory();

import localStorage from './localStorage';
import Main from './components/Main.jsx';


localStorage.init();
const store = createStore(reducer, localStorage.get());


ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Main />
		</Router>
	</Provider>
), document.querySelector('#root'));