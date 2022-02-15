import React, { useState } from 'react' // here we imported useState hook.


export default function TextForm(props) {
  const upperClick = () => {
    console.log("Uppercase conversion button was clicked");
    let newText = text.toUpperCase();
    setText(newText); // by this we are able to convert the text to uppercase
    props.olert("Converted to UpperCase", "primary")
  }
  const lowerClick = () => {
    console.log("Lowercase conversion button was clicked");
    let newText = text.toLowerCase();
    setText(newText); // by this we are able to convert the text to lowercase
    props.olert("Converted to Lowercase", "info")
  }
  const replaceClick = () => {
    console.log("Text was cleared");
    let newText = text.replace(text, ""); // first: item to be replaced, second: replace item with.
    setText(newText); 
    props.olert("Cleared text", "dark")
  }






  const upperChange = (e) => {
    console.log("Uppercase change button was clicked");
    setText(e.target.value);
   
  } // this will help edit the textarea.

  const [text, setText] = useState('Enter text here'); // here we set the default value for the state as 'Enter text here' and we will use setText to alter the text. Here 'text' is a variable declared by us. We could use 'count' also.
  return (
    
      <div className={`bg-${props.mode}`}>
        <div className=" ps-3 pe-3 pb-3">
          <div>

            {/* <h2>{text}</h2> * this will render 'Enter text here' as assigned above. */}

            <label htmlFor="textarea" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Write Something</label> <br />
            <textarea name="textarea" id="textarea" className='form-control' cols="30" rows="10" placeholder='write something bro...' value={text} onChange={upperChange}></textarea> <br />
            {/** Using this onChange event, we can now edit the text inside textarea. We were not able to do it when we did not use this event.  */}

            <button onClick={upperClick} className="btn btn-info form-sm-control rounded-pill my-1 mx-1">Convert to uppercase</button>
            <button onClick={lowerClick} className="btn btn-info form-sm-control rounded-pill my-1 mx-1">Convert to Lowercase</button>
            <button onClick={replaceClick} className="btn btn-info form-sm-control rounded-pill my-1 mx-1">Clear all</button>
            

          </div>
          <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'} col-lg-4 text-center mt-2`}>Your input info:</h2>
          <p className={`bg-light rounded-pill col-lg-4 text-center`}>{text.split(" ").length} words and {text.length} characters</p>
          <p className={`bg-light rounded-pill col-lg-4 text-center`}>{0.008 * text.split(" ").length} minutes taken to read.</p>
          
        </div>
      </div>
    
  )
}
