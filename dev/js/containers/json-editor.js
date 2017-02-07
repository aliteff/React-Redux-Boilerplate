import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable, {Map} from 'immutable';
import JSONTree from 'react-json-tree'

class JsonEditor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			json: {
				array: [1, 2, 3],
		  		bool: true,
		  		object: {
		    		foo: 'bar'
		  		},
		  		immutable: Map({ key: 'value' })
			}
		};


	};

	render() {
		return (
			<div>
				<h2 className="text-primary">JSON Editor</h2>
				<div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className='panel-title'>Editor</h3>
                    </div>
                    <div className="panel-body">
						<JSONTree data={this.state.json} />
                    </div>
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
