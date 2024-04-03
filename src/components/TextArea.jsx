import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function TextArea(props) {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        toast.success("Text converted to uppercase successfully")
    }

    const handleDelete = (event) => {
        setText('');
        toast.success("Text deleted successfully")
    }

    const handleLowClick = (event) => {
        setText(text.toLowerCase());
        toast.success("Text converted to lowercase successfully")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        toast.success("Text copied successfully")
    }

    useEffect(() => {
        const textarea = document.getElementById('exampleFormControlTextarea1');
        if (textarea) {
            const placeholderColor = props.mode === 'dark' ? 'white' : 'black';
            textarea.setAttribute('placeholder', 'Enter your text here');
            textarea.style.color = placeholderColor;
        }
    }, [props.mode]);

    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#242422' : 'white' , height:'92vh', overflowY:'hidden'}}>
            <div className="container mt-3">
                <h3>
                    <label htmlFor="exampleFormControlTextarea1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Enter your text here</label>
                </h3>
                <textarea
                    className="form-control mt-3"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder='Enter your text here'
                    value={text}
                    onChange={handleChange}
                    style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#242422' : 'white',
                    marginTop: '10px',  fontSize:'25px'}}
                ></textarea>
                <div className="container-btn-head">
                    <button type="button" className={`btn btn-${props.mode === 'dark' ? 'light text-white bg-dark' : 'dark'}`} id="btn" onClick={handleUpClick}>To uppercaseText
                    </button>
                    <button type="button" className={`btn btn-${props.mode === 'dark' ? 'light text-white bg-dark' : 'dark'}`} id="btn3" onClick={handleLowClick}>To LowerCaseText
                    </button>
                    <button type="button" className={`btn btn-${props.mode === 'dark' ? 'light text-white bg-dark' : 'dark'}`} id="btn5" onClick={handleCopy}>To copy the text
                    </button>
                    <button type="button" className={`btn btn-${props.mode === 'dark' ? 'light text-white bg-dark' : 'dark'}`} id="btn4" onClick={props.toggleMode}>Change Color
                    </button>
                    <button type="button" className={`btn btn-${props.mode === 'bl;ack' ? 'light text-white bg-dark' : 'red'}`} id="btn2" onClick={handleDelete}>To delete the text
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
