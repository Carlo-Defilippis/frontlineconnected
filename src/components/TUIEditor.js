import React from 'react';
let Editor = null
if (typeof window !== `undefined`) {
    require('codemirror/lib/codemirror.css')
    require('@toast-ui/editor/dist/toastui-editor.css')
    const Editor = require('@toast-ui/react-editor')
} else {
    let Editor = null
}


export default class TUIEditor extends React.Component {
    editorRef = React.createRef();

    handleClick = () => {
        this.editorRef.current.getInstance().exec('Bold');
    };

    render() {
        return (
            <>
                {typeof window !== `undefined` ?
                    <div ref={this.editorRef}>Loading</div> :
                    <Editor
                        previewStyle="vertical"
                        height="95vh"
                        initialEditType="markdown"
                        initialValue="hello"
                        ref={this.editorRef}
                    />
                }

                <button onClick={this.handleClick}>make bold</button>
            </>
        );
    }
}