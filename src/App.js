import React from "react";
import Footer from "./layout/Footer";
import Body from "./layout/Body";
import Navbar from "./layout/Navbar";
import LeftMenu from "./layout/LeftMenu";
import "./layout/css/main.css"

function App() {
 

  return (
    <div id="my-app">
      <Navbar  /> 
      <div id="middle-box">
        <LeftMenu />
        <Body />
        </div>
      <Footer />
    </div>
  );
}

export default App;
