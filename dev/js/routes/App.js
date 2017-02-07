import React, {Component} from 'react';
// import UserList from '../containers/user-list';
// import UserDetails from '../containers/user-detail';
import NavBar from '../components/nav-bar';
import Breadcrumbs from 'react-breadcrumbs';
// import BreadcrumbsCustom from '../components/breadcrumbs';
require('../../scss/style.scss');


class App extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <NavBar routes={this.props.routes} />

                <div className='container' id="main-content">
                    <Breadcrumbs
                        routes={this.props.routes}
                        params={this.props.params} />

                    <hr/>

                    {this.props.children}
                </div>
            </div>
        );

    }
}

export default App;
