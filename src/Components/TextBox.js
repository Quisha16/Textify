import React, { useState } from "react";
import "../App.css"; // Import custom CSS file if needed

export default function TextBox(props) {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    let upperText = Text.toUpperCase();
    setText(upperText);
  };

  const handleLowClick = () => {
    let lowerText = Text.toLowerCase();
    setText(lowerText);
  };

  const handleClearClick = () => {
    setText("");
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
    const blob = new Blob([Text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "TextFile.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(Text)
        .then(() => console.log("text copied to clipboard"))
        .catch((err) => console.error("Failed to copy text:", err));
    } else {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = Text;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      try {
        document.execCommand("copy");
        console.log("text copied to clipboard");
      } catch (err) {
        console.error("Failed to copy text:", err);
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

  const wordCount = Text.trim() === "" ? 0 : Text.trim().split(/\s+/).length;
  const characterCount = Text.length;
  const timeToReadMinutes = (0.008 * wordCount).toFixed(2);
  const timeToReadSeconds = (0.47 * wordCount).toFixed(2);

  return (
    <div className="container">
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="TextBox"
          rows="8"
          value={Text}
          placeholder="Enter text here"
        ></textarea>
      </div>
      <div className="button-group">
        <button className="btn btn-warning mx-1" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button className="btn btn-warning mx-1" onClick={handleLowClick}>
          lowercase
        </button>
        <button className="btn btn-warning mx-1" onClick={handleCapClick}>
          Capitalize
        </button>
        <button className="btn btn-warning mx-1" onClick={handleRevClick}>
          REVERSE - esrever
        </button>
        <button className="btn btn-warning mx-1" onClick={handleClipboard}>
          Copy to Clipboard
        </button>
        <button className="btn btn-warning mx-1" onClick={handleDownload}>
          Download (.txt file)
        </button>
        <button className="btn btn-dark mx-1" onClick={handleClearClick}>
          C L E A R
        </button>
        <span
          className="emoji-btn mx-1"
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
          <h4>Preview</h4>
          <p className="bg-light text-dark">{Text}</p>
        </div>
      </div>
    </div>
  );
}
