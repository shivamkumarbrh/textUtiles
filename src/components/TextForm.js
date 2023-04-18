import React,{useState} from 'react'



 function TextForm(props) {


  

const handleUpClick = ()=>{
  // console.log("you just click");
const newText = text.toUpperCase();
setText(newText);
props.showAlert("Convert to UpperCase","Sucess");
}
const handleOnChange = (event)=>{
  // console.log("you just change");
  setText(event.target.value)
}

const handleLoClick = ()=>{
  const newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Convert to LowerCase","Sucess");
}

const handleCaClick = ()=>{
  const newText = text.charAt().toUpperCase()+text.slice(1);
  setText(newText);
}

const handleClear = ()=>{
  const newText = "";
  setText(newText);
}

  const [text,setText] = useState("Enter your text22");

  return (
    <>
   
<div className="mb-3 container" style={{color: props.mode === 'danger'? 'white':'red' }}>
    <h1>{props.heading}   </h1>
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#042743':'white' ,color: props.mode === 'dark'?'white':'black'  }} id="myBox" rows="8"></textarea>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-success my-3 mx-2" onClick={handleCaClick}>Convert to Captilize</button>
  <button className="btn btn-secondary" onClick={handleClear}>Clear the text</button>
  {/* <button className="btn btn-danger" onClick={handleClear}>Clear</button> */}
  
</div>20

<div className="container" style={{color:props.mode === 'danger'? 'white':'red' }}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} charactors</p>
  <p>{0.008 * text.split(' ').length} mintes</p>
  <h1>Text Preview</h1>
  <p>{text}</p>
</div>
    </>
  )
}


export default TextForm;