import React, { Component } from "react";
import Converter from "./pages/Converter";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

export default class App extends Component {

  render() {
    return (
      <>

        <Converter />
        <About />
        <FAQ />
      </>
    );
  }
}
