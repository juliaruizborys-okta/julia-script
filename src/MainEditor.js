import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './main.css';

export default class MainEditor extends React.Component {
    constructor(props) {
            super(props);
            this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
          
    }
    render() {
        return (
            <div className="editor-container">
                <Editor editorState={this.state.editorState} onEditorStateChange={this.onChange} />
            </div>
        );
    }
}
