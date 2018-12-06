import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

class App extends Component {
  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
