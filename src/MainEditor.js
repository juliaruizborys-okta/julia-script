import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './main.css';
import getDropdownMarkup from "./getDropdownMarkup";

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
        const titleOptions = ["title option 1", "title option dos"];
        this.state = {
            editorState: EditorState.createEmpty(),
            selectValue: titleOptions[0],
            titleOptions: titleOptions,
            titleText: "",
            output: ""
        };

        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onTitleTextChange = this.onTitleTextChange.bind(this);
        this.onProcessButtonClick = this.onProcessButtonClick.bind(this);
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState
        }, () => {
            this.makeOutput();
        });
    }

    onSelectChange(event) {
        this.setState({
            selectValue: event.target.value
        }, () => {
            this.makeOutput();
        });
    }

    onTitleTextChange(event) {
        this.setState({
            titleText: event.target.value
        }, () => {
            this.makeOutput();
        });
    }

    makeOutput() {
        const bodyText = "";
        const nextOutput = getDropdownMarkup(this.state.titleText, bodyText);
        this.setState({
            output: nextOutput
        });
    }

    onProcessButtonClick() {
        this.makeOutput();
    }

    getSelect() {
        const selectOptions = this.state.titleOptions.map((title) => {
            return (
                <option key={title} value={title}>{title}</option>
            );
        });

        return (
            <select value={this.state.selectValue} onChange={this.onSelectChange}>
                {selectOptions}
            </select>
        )
    }

    render() {
        const editorState = this.state.editorState;
        return (
            <div className="editor-container">
                <input type="text" value={this.state.titleText} onChange={this.onTitleTextChange} />
                {this.getSelect()}
                <Editor 
                    toolbar={toolbar}
                    editorState={editorState} 
                    onEditorStateChange={this.onEditorStateChange} 
                />
                <button onClick={this.onProcessButtonClick}>Process!</button>
                <hr/>
                <h2>Output:</h2>
                <pre className="output">{this.state.output}</pre>
            </div>
        );
    }
}
