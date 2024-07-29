import React, { useState } from "react";

export default function TextBox(props) {
  const handleUpClick = () => {
    let upperText = Text.toUpperCase();
    setText(upperText);
  };
  const handleLowClick = () => {
    let lowerText = Text.toLowerCase();
    setText(lowerText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Initialize Text state to an empty string
  const [Text, setText] = useState("");

  // Calculate word count, character count, and reading time
  const wordCount = Text.trim() === "" ? 0 : Text.trim().split(/\s+/).length;
  const characterCount = Text.length;
  const timeToReadMinutes = (0.008 * wordCount).toFixed(2);
  const timeToReadSeconds = (0.47 * wordCount).toFixed(2);

  return (
    //react fregment
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="TextBox"
            rows="8"
            value={Text}
            placeholder="enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary " onClick={handleLowClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container my-5">
        <h3>Text summary</h3>
        <p>
          Number of words: {wordCount}, Number of characters: {characterCount}
          <br />
          Time taken to read the above words:
          <li>Minutes: {timeToReadMinutes}</li>
          <li>Seconds: {timeToReadSeconds}</li>
        </p>
        <h3>Preview </h3>
        <p className="bg-light text-dark">{Text}</p>
      </div>
    </>
  );
}
