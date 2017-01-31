import React, {Component} from 'react';
import _ from 'lodash';

class TextInput extends Component {


	// static propTypes = {
 //    	label: React.PropTypes.string
 //  	};

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.id = _.uniqueId('name-input-');
	}

	renderLabelMaybe(forHtmlID, label) {
		if(typeof label === 'undefined' || label === '') {
			return;
		} else {
			return <label htmlFor={forHtmlID}>{label}</label>;
		}
	}

	render(){
		const {value, onChange, label, type, className, id} = this.props;
		const forHtmlID = id || this.id;

		return (
			<div className="form-group">
				{this.renderLabelMaybe(forHtmlID, label)}
				<input
					{...this.props}
					id={forHtmlID}
					className={className || "form-control"}
	                type={type || 'text'}
	                onChange={onChange}
	               	value={value} />
           	</div>
		);
	}
}

TextInput.propTypes = {
  	label: React.PropTypes.string
};


export default TextInput;