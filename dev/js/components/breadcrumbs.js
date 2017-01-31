import React, {Component} from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory} from 'react-router';
// import Breadcrumbs from 'react-breadcrumbs';


class BreadcrumbsCustom extends Component {

	constructor(props){
		super(props);
	}

	render(){

		return (

			<Breadcrumbs
            	routes={this.props.routes}
                params={this.props.params} />
		);
	}
}




export default BreadcrumbsCustom;