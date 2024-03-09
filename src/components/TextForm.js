import React, { useState } from "react";

export default function TextForm(props) {
  
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("upClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    // console.log("upClick");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Cleared Text", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };

  return (
    <div className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * 0.008} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </div>
  );
}
