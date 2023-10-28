import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const Clear = () => {
        setText("");
    }
    const handleLCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    // to show the typed character
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const[text,setText] = useState('');
    // text = "new Text"; // wrong way to change the text
    // setText = ("new Text");
    return (
        <>
    <div className='container' style = {{color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea className="form-control" value ={text} style = {{backgroundColor: props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="14"></textarea>
</div>
<button className="btn-btn-primary mx-2" onClick={handleUCase}>Convert to UpperCase</button>
<button className="btn-btn-primary mx-2" onClick={handleLCase}>Convert to LowerCase</button>
<button className="btn-btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className= "btn-btn-primary mx-2" onClick={Clear}>Clear Text</button>
    </div>
    <div className='container my-3' style = {{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.trim(text.split(" ").length)} words, {text.length} characters</p>
        <p>{0.008*(text.split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
