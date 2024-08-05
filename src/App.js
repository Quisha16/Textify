import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";

function App() {
  return (
    <Router>
      <Navbar title="Textify" aboutUs="About" />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={<TextBox heading="Input your text to get started..." />}
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
