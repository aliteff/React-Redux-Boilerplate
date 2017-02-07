import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable, {Map} from 'immutable';


class JsonEditor extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2 className="text-primary">JSON Editor</h2>
				<div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className='panel-title'>Editor</h3>
                    </div>
                    <div className="panel-body"></div>
                </div>
			</div>
		);
	}
}


/****** REDUX FUNCTIONS ******/

function mapStateToProps(state) {
    return {};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(JsonEditor);
