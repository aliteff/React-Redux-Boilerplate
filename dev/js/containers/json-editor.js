import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable, {Map} from 'immutable';
// import JsonEditorTool from 'jsoneditor';
import JSONEditor from 'jsoneditor';
// import 'jsoneditor.css';
// const json = require('jsoneditor');

class JsonEditor extends Component {

	constructor(props) {
		super(props);

		// console.log( this.refs );
	}

	componentDidMount() {

    	const containerText = this.refs['json-editor-text'];
        const optionsText = {
        	"mode": "text",
    		"indentation": 4
        };
        const editorText = new JSONEditor(containerText, optionsText);


        const containerTree = this.refs['json-editor-tree'];
        const optionsTree = {
        	"mode": "tree",
        };
        const editorTree = new JSONEditor(containerTree, optionsTree);

        // const json = {
        //     "Array": [1, 2, 3],
        //     "Boolean": true,
        //     "Null": null,
        //     "Number": 123,
        //     "Object": {"a": "b", "c": "d"},
        //     "String": "Hello World"
        // };



        editorTree.set(this.props);
        editorText.set(this.props);
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
                    		ref='json-editor-text'
                    		className='json-editor-container'
                    		style={{width:'100%', height: 400}}>
                    	</div>

                    	<hr/>

                    	<div
                    		ref='json-editor-tree'
                    		className='json-editor-container'
                    		style={{width:'100%', height: 400}}>
                    	</div>
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
