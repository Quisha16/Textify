import "./App.css";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";

function App() {
  return (
    //jsx fregment
    <>
      <Navbar title="Textify" />
      <div className="container my-5">
        <TextBox heading="Enter the text you want to transform..." />
      </div>
    </>
  );
}

export default App;
