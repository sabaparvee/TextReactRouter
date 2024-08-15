import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase','Sucess');

  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase','Sucess');

  }
  const handleLClearClick=()=>{
    let newText=''
    setText(newText);
    props.showAlert('ClearText','Sucess');

  }
  
  const handleOnChange=(event)=>{
    console.log("handler change")
    setText(event.target.value)
  }
  const handleCopy=()=>{
    console.log('Iam copy');
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copy to clipboard','Sucess');   
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Remove Extra Spaces','Sucess');

  }
  const [text, setText] = useState('Enter text here')

  return (
    <>
    <div className="col-span-full px-60 py-10" style={{color:props.mode==='white'?'gray':'white'}}>
          <label htmlFor="myBox" className="block text-sm font-medium leading-6 ">{props.heading}</label>
          <div className="mt-2">
            <textarea id="myBox" name="about" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='white'?'white':'gray'}}
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <button className='btn px-2 py-2 bg-slate-600 my-2 rounded-lg text-neutral-50' onClick={handleUpClick}>
            Convert To UpperCase</button>
          <button className='btn px-2 py-2 bg-slate-600 my-2 rounded-lg text-neutral-50 mx-2' onClick={handleLoClick}>
            Convert To LowerCase</button>
          <button className='btn px-2 py-2 bg-slate-600 my-2 rounded-lg text-neutral-50 mx-2' onClick={handleLClearClick}>
            Clear Text</button>  
            <button className='btn px-2 py-2 bg-slate-600 my-2 rounded-lg text-neutral-50 mx-2' onClick={handleCopy}>
            Copy</button>
            <button className='btn px-2 py-2 bg-slate-600 my-2 rounded-lg text-neutral-50 mx-2' onClick={handleExtraSpaces}>
            ExtraSpaces</button>    
            {/* <button className='btn px-2 py-2 bg-slate-600 my-2 rounded-lg text-neutral-50 mx-2' onClick={handleCapClick}>
            Capitalize Case</button>   */}
  


    </div>
    <div className='col-span-full  px-60 'style={{color:props.mode==='white'?'gray':'white  '}}>
      <h1 className="block text-sm font-medium leading-6 ">Your Text Summary</h1>
      <p className='mt-2'>{text.split(' ').length} words and {text.length}characters</p>
      <p className='mt-2'>{0.008*text.split(' ').length} Minutes to read</p>
      <h2 className='block text-sm font-medium leading-6  mt-2'>Preview</h2>
      <p>{text.length>0?text:'Enter something in text area above to preview'}</p>

    </div>
    </>
  )
}
