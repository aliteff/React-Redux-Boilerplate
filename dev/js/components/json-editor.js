import React, {Component, PropTypes} from 'react';
import JSONEditor from 'jsoneditor/dist/jsoneditor';

/**
 * Documentation for properties can be found
 * here: https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
 */

const PROP_TYPES = {
	// style: PropTypes.object,
	mode: PropTypes.string,
	modes: PropTypes.array,
	indentation: PropTypes.number,
	json: PropTypes.object.isRequired,
	ace: PropTypes.object,
	ajv: PropTypes.object,
	onChange: PropTypes.func,
	onEditable: PropTypes.func,
	onModeChange: PropTypes.func,
	escapeUnicode: PropTypes.bool,
	sortObjectKeys: PropTypes.bool,
	history: PropTypes.bool,
	name: PropTypes.string,
	schema: PropTypes.object,
	search: PropTypes.bool,
};

class JsonEditor extends Component {

	constructor(props) {
		super(props);
		this.onChangeCustom = this.onChangeCustom.bind(this);
		this.editor = {};
		this.container = {};
	}

	onChangeCustom(onChange) {
		return onChange;
	}

	componentWillMount() {

		this.container = document.createElement('div');

		/**** Figure this out ****/
		this.container.setAttribute("style", 'height:500px');
		/**** Figure this out ****/

    	const { mode, modes, indentation, json, ace, ajv,
    		onChange, onEditable, onModeChange, escapeUnicode,
    		sortObjectKeys, history, name, schema, search
    	} = this.props;

    	const options = {
    		mode: mode || 'text',
    		modes: modes || ['text', 'tree'],
    		indentation: indentation || 4,
    		ace,
    		ajv,
    		onChange: this.onChangeCustom(onChange),
    		onEditable,
    		onModeChange,
    		escapeUnicode,
    		sortObjectKeys,
    		history,
    		name,
    		schema,
    		search
    	};

        this.editor = new JSONEditor(this.container, options);
	}

	componentDidMount() {

		this.refs.container.appendChild(this.container);
        this.editor.set(this.props.json);
    }



	render() {

		return (
			<div
				// {...this.props}
				className="json-editor-wrapper"
				ref="container"></div>

		);
	}

}

JsonEditor.propTypes = PROP_TYPES;

export default JsonEditor;