import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState('');
    const submit = (event) => {
        setText(event.target.value);
    }
    const upperCase = () => {
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const LowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ClearText = () => {
        let newText = '';
        setText(newText);
    }
    const CopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }  
    const RemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
            <div className="container mt-4">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={submit} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={upperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={LowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={RemoveSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
            </div>
            <div className="container my-2">
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.0008 * text.split(" ").length} Minutes to read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;