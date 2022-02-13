import React, { Component } from "react";
import Converter from "./pages/Converter";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

import DAO from "./components/DAO"

export default class App extends Component {

  componentDidMount() {
    let dao = new DAO();
    dao.Test();
  }

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
