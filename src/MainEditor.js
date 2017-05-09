import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './main.css';

//TODO refactor
const toolbar = {
    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
    fontFamily: {
        options: ['Arial', 'Courier']
    },
};

export default class MainEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState) {
        this.setState({editorState});
    }

    render() {
        const editorState = this.state.editorState;
        return (
            <div className="editor-container">
                <Editor 
                    toolbar={toolbar}
                    editorState={editorState} 
                    onEditorStateChange={this.onEditorStateChange} 
                />
            </div>
        );
    }
}
