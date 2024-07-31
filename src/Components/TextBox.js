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
  const handleClearClick = () => {
    let CLRtext = "";
    setText(CLRtext);
  };
  const handleCapClick = () => {
    let capText = Text.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capText);
  };
  const handleRevClick = () => {
    let revText = Text.split("").reverse().join("");
    setText(revText);
  };

  const handleDownload = () => {
    const blob = new Blob([Text], { type: "text/plain" }); //Blob with text content
    const link = document.createElement("a"); //temporary anchor element to trigger download
    link.href = URL.createObjectURL(blob); //URL for the Blob and set it as the href attribute of the anchor
    link.download = "TextFile.txt"; //set name of file
    document.body.appendChild(link); // Add the anchor element to the document body
    link.click(); //click the anchor to start the download
    document.body.removeChild(link);
  };

  const handleClipboard = () => {
    // Check if the Clipboard API is supported
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(Text)
        .then(() => {
          console.log("text copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy text using clipboard api:", err);
        });
    } else {
      // Fallback: temporary textarea if Clipboard API is not supported
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = Text;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      try {
        document.execCommand("copy");
        console.log("text copied to clipboard");
      } catch (err) {
        console.error("Failed to copy text using fallback:", err);
      }
      document.body.removeChild(tempTextArea);
    }
  };
  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(Text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState(""); // add state to the function component
  //const [formattedText, setFormattedText] = useState(""); // State for formatted text

  const wordCount = Text.trim() === "" ? 0 : Text.trim().split(/\s+/).length; //use regex -> s+ ( one or more spaces)
  const characterCount = Text.length; //fn to get length of text
  const timeToReadMinutes = (0.008 * wordCount).toFixed(2); //in 1 minute u read 128 words, so 0.0078 mins to read 1 word.
  const timeToReadSeconds = (0.47 * wordCount).toFixed(2); // in 60 sec u read 128 words, so 0.468 secs to read 1 word.

  return (
    //react fregment
    <>
      <div className="container">
        <h4>{props.heading}</h4>
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
        <button className="btn btn-outline-dark mx-4" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button className="btn btn-outline-dark mx-4" onClick={handleLowClick}>
          lowercase
        </button>
        <button className="btn btn-outline-dark mx-4" onClick={handleCapClick}>
          Capitalize
        </button>
        <button className="btn btn-outline-dark mx-4" onClick={handleRevClick}>
          REVERSE - esrever
        </button>
        <button className="btn btn-outline-dark mx-4" onClick={handleClipboard}>
          Copy to Clipboard
        </button>
        <button className="btn btn-outline-dark mx-4" onClick={handleDownload}>
          Download (.txt file)
        </button>
        <button
          className="btn btn-outline-secondary mx-4"
          onClick={handleClearClick}
        >
          C L E A R
        </button>
        <span
          className="emoji-btn mx-4"
          onClick={handleSpeak}
          role="button"
          aria-label="Speak"
          style={{ fontSize: "24px", cursor: "pointer" }}
        >
          🔊
        </span>
      </div>
      <div className="container my-5">
        <h4>Text Overview</h4>
        <p>
          Number of words: {wordCount}, Number of characters: {characterCount}
          <br />
          Time taken to read the above words:
          <li>Minutes: {timeToReadMinutes}</li>
          <li>Seconds: {timeToReadSeconds}</li>
        </p>
        <div className="container my-5">
          <h4>Preview </h4>
          <p className="bg-light text-dark ">{Text}</p>
        </div>
      </div>
    </>
  );
}
