import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

export default function TextArea() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("black");
    const [bg, setbackground] = useState("white");
    const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        toast.success("Text converted to uppercase succesfully")
    }
    const handleDelete = (event) => {
        setText('');
        toast.success("Text deleted succesfully")
    }
    const handleLowClick = (event) => {
        setText(text.toLowerCase());
        toast.success("Text converted to lowercase succesfully")
    }

    const toggleColor = () => {
        setColor(color === "black" ? "white" : "black");
        setbackground(bg === "white" ? "black" : "white")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        toast.success("Text copied successfully")
    }

    return (
        <div className="container" style={{ color: color , background:bg}}>
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
                    <button type="button" className="btn btn-dark" id="btn5" onClick={handleCopy}>To copy the text
                    </button>
                    <button type="button" className="btn btn-dark" id="btn4" onClick={toggleColor}>Change Color
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
            <div className="container">
                <p className='txtsum'>Your text summary: </p>
                <p className='words'>{text.split(" ").length} words, {text.length} characters</p>
                <p className="time">{0.008 * text.split(" ").length} Minutes taken</p>
            </div>
        
        </div>
    );
}
