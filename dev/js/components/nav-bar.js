import React, {Component} from 'react';
import NavLink from './NavLink';
import _ from 'lodash';
// import {Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory} from 'react-router';
// import Breadcrumbs from 'react-breadcrumbs';


class NavBar extends Component {

	constructor(props){
		super(props);
	}



	renderNavItems(){
		const listItems = this.props.routes.map((route) => {
			if( typeof route.name !== 'undefined' ) {
				return (
					<li key={_.uniqueId('nav-item-')}>
						<NavLink to={ route.path } >{route.name}</NavLink>
					</li>
				);
			}
		});

		return listItems;
	}

	render(){
		return (

			 <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    	<ul className='nav navbar-nav' role="nav">
                    		{/*this.renderNavItems()*/}

                            <li className=""><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                            <li><NavLink to="/users">Users</NavLink></li>

                      	</ul>
                    </div>
                </nav>

		);
	}
}




export default NavBar;