import React, { Component } from "react";
import axios from "axios";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
const baseURL = "https://nab-grinder-converter.herokuapp.com";
export default class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    console.log("Testing");
    axios.get(baseURL + "/grinder/all").then((res) => {
      const grinders = res.data;
      console.log(grinders);
      this.setState({ data: grinders.data });
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.data.map((item) => (
            <>
              <li key={item.grinder}>Name: {item.grinder}</li>
              <li key={item.grindSize}>Size: {item.grindSize}</li>
            </>
          ))}
        </ul>
        <About />
        <FAQ />
      </>
    );
  }
}
