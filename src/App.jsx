import React from "react";
import CollapsibleExample from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
import "./App.css";
import Routing from "./utils/Routing";
//import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="body">
      <CollapsibleExample />
      <Routing />
      <Footer />

    </div>
  );
}

export default App;
