import React from "react";

export default function AboutUs(props) {
  const containerStyle = {
    backgroundColor: props.mode === 'dark' ? '#3a3f44' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
    borderRadius: '10px',
    padding: '20px',
  };

  const accordionButtonStyle = {
    backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  const accordionBodyStyle = {
    backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <div className="container my-5" style={containerStyle}>
      <div className="text-center">
        <h1>About Us</h1>
        <p>
          Welcome to our innovative text editing application! Our mission is to
          provide you with a versatile tool that enhances your text manipulation
          experience. Whether you're a writer, student, or professional, our app
          offers an array of features designed to simplify and elevate your text
          editing tasks. Explore the details below to learn more about the
          functionalities we offer.
        </p>
      </div>

      <div
        className="accordion mx-auto"
        id="accordionExample"
        style={{ maxWidth: "800px" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={accordionButtonStyle}
            >
              Effortless Text Transformation
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionBodyStyle}>
              Our application provides a powerful text editor that allows users
              to easily transform their text with a range of formatting options.
              Whether you need to convert text to uppercase, lowercase, or
              capitalize each word, our intuitive buttons ensure that text
              manipulation is just a click away.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={accordionButtonStyle}
            >
              Enhanced Functionality
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionBodyStyle}>
              Beyond basic text formatting, our app includes additional features
              to enhance your workflow. Copy your text directly to the clipboard
              for quick pasting, download it as a .txt file for offline use, or
              even convert it to speech with our built-in text-to-speech
              functionality.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={accordionButtonStyle}
            >
              User-Centric Design
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionBodyStyle}>
              We prioritize user convenience with a clean, user-friendly
              interface that simplifies text management. Our application is
              designed to make text editing and conversion straightforward,
              allowing you to focus on your content without getting bogged down
              by complex tools.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
