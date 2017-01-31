import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory} from 'react-router';
import App from './app';
import Home from './home';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';


const Routes = () => {
	return (
		<Router history={hashHistory} >
			<Route path="/" name='Home' component={App}>
				<IndexRoute component={Home} />
				<Route name='Users' path="users">
					<IndexRoute component={UserList} />
					<Route name='UserID' path=":userID" component={UserDetail} />
				</Route>
			</Route>
		</Router>
	);
};

export default Routes;