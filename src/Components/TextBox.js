import React, { useState } from "react";

export default function TextBox(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked ");
    let upperText = Text.toUpperCase();
    setText(upperText);
  };

  const handleOnChange = (event) => {
    //console.log("inside onChange");
    setText(event.target.value);
  };
  const [Text, setText] = useState("enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="TextBox"
          rows="8"
          value={Text}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
    </div>
  );
}
