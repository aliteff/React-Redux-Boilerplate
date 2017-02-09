import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable, {Map} from 'immutable';
import JSONEditor from 'jsoneditor/dist/jsoneditor';


class JsonEditor extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}


	componentDidMount() {
		const container = this.refs['json-editor'];
		/**
 		* Documentation for options can be found
 		* here: https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
 		*/
        const options = {
        	modes: ['text', 'tree'],
    		indentation: 4,
    		search: true,
    		onChange: this.onChange,
        };

        this.editor = new JSONEditor(container, options);
        this.editor.set({
            "Array": [1, 2, 3],
            "Boolean": true,
            "Null": null,
            "Number": 123,
            "Object": {"a": "b", "c": "d"},
            "String": "Hello World"
        });
  	}

	onClick() {
		console.log( this.editor.get() );
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
                    	<div
                    		ref='json-editor'
                    		className='json-editor-container'>
                    	</div>
						<button
							className="btn btn-primary"
							onClick={this.onClick}>
							Console.log JSON
						</button>
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
