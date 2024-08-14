import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor =
        "#3a3f44 ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Router>
      <Navbar
        title="Textify"
        aboutUs="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={<TextBox heading="Input your text to get started..." mode={mode}/>}
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
