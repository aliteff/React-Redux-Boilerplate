import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable, {Map} from 'immutable';
import {JsonEditor} from 'react-json-edit';

class JsonEditorContainer extends Component {

	constructor(props) {
		super(props);
		this.callback = this.callback.bind(this);
		this.state = {
	    	json: {
     			title      : "My pretty form",
      			description: "Declarative pure data DSLs are the best.",
      			type       : "object",
      			properties : {
        			comment: {
         				title      : "Your comment",
           				description: "Type something here.",
          				type       : "string",
          				minLength  : 1
        			}
      			}
    		} /*  setup here or load elsewhere */
	    };
	}


	callback(changes) {
    	this.setState({
    		json: changes.json
    	});
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
							value={this.state.json}
							propagateChanges={this.callback}
							tableLike={false} />
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


export default connect(mapStateToProps, matchDispatchToProps)(JsonEditorContainer);
