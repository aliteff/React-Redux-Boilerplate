import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable from 'immutable';
import JsonEditor from '../components/json-editor';

class JsonEditorWrapper extends Component {

	constructor(props) {
		super(props);

		this.state = {
			json: Immutable.fromJS({
	            "Array": [1, 2, 3],
	            "Boolean": true,
	            "Null": null,
	            "Number": 123,
	            "Object": {"a": "b", "c": "d"},
	            "String": "Hello World"
	        })
		};
	}


	onJsonChange(json) {

		console.log(json);

	}


	render() {
		return (
			<div>
				<h2 className="text-primary">JSON Editor</h2>
				<div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className='panel-title'>Editor</h3>
                    </div>
                    <div className="panel-body">
						<JsonEditor
							search={true}
							onChange={this.onJsonChange}
							style={{width:'100%', height:'500px'}}
							modes={['tree', 'view', 'code', 'text']}
							json={this.state.json.toJS()} />
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


export default connect(mapStateToProps, matchDispatchToProps)(JsonEditorWrapper);
