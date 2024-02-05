import React from "react";
import CollapsibleExample from "./Components/Navbar/Navbar";
import UncontrolledExample from "./Components/imageSlider/Slider";
import Page from "./Components/Page/Page";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="body">
      <CollapsibleExample />
      <UncontrolledExample />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
