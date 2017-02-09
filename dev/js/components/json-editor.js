import React, {Component, PropTypes} from 'react';
import JSONEditor from 'jsoneditor/dist/jsoneditor';

/**
 * Documentation for options can be found
 * here: https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
 */

const PROP_TYPES = {
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
		this.editor = {};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		const json = this.editor.get();
		this.props.onChange(json);
	}

	componentDidMount() {
		const container = this.refs.container;
		const { mode, modes, indentation, json, ace, ajv,
			onEditable, onModeChange, escapeUnicode,
			sortObjectKeys, history, name, schema, search
		} = this.props;

		const options = {
			mode: mode || 'text',
			modes: modes || ['text', 'tree'],
			indentation: indentation || 4,
			ace,
			ajv,
			onChange: this.handleChange,
			onEditable,
			onModeChange,
			escapeUnicode,
			sortObjectKeys,
			history,
			name,
			schema,
			search
		};

		this.editor = new JSONEditor(container, options);
		this.editor.set(this.props.json);
	}

	render() {
		return (
			<div
				style={this.props.style || {width:'100%', height:'500px'}}
				className={`json-editor-wrapper ${this.props.className}`}
				ref="container"></div>
		);
	}
}

JsonEditor.propTypes = PROP_TYPES;

export default JsonEditor;
