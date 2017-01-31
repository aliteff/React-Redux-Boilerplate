import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './stores';
import Routes from './routes';
// import App from './components/App';




ReactDOM.render(
    <Provider store={store}>
    	<Routes />
    </Provider>,
    document.getElementById('root')
);
