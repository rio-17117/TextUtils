import React, { useState } from 'react';

export default function TextArea() {
    const [text, setText] = useState("");
    const [uppercaseText, setUppercaseText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleDelete = (event) => {
        setText(' ');
    }
    const handleLowClick = (event) => {
        setText(text.toLowerCase());
    }

    return (
        <div className="container">
            <div className="container mt-3">
                <h3>
                    <label htmlFor="exampleFormControlTextarea1">Enter your text here</label>
                </h3>
                <textarea
                    className="form-control mt-3"
                    id="exampleFormControlTextarea1 mt-3"
                    rows="5"
                    placeholder='Enter your text here'
                    value={text}
                    onChange={handleChange}
                ></textarea>
                <div className="container-btn-head">
                <button type="button" className="btn btn-dark" id="btn" onClick={handleUpClick}>To uppercaseText
                </button>
                <button type="button" className="btn btn-dark" id="btn3" onClick={handleLowClick}>To LowerCaseText
                </button>
                <button type="button" className="btn btn-dark" id="btn2" onClick={handleDelete}>To delete the text 
                </button>
                </div>
            </div>
            <div className="container mt-3">
                <h3 id="prev">Converted-Text:
                    <p>{text}</p>
                </h3>
            </div>
            <div className="continer ">
                    <p className='txtsum'>Your text summary: </p>
                    <p className='words'>{text.split(" ").length}words, {text.length}characters</p>
                    <p className="time">{0.008 * text.split(" ").length} Minutes taken</p>
            </div>
        </div>
    );
}