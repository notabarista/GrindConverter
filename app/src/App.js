import React, { Component } from "react";
import axios from "axios";

const baseURL = "https://nab-grinder-converter.herokuapp.com";
export default class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    console.log("Testing");
    axios.get(baseURL+"/grinder/all").then((res) => {
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
            <><li>Name: {item.grinder}</li><li>Size: {item.grindSize}</li></>
          ))}
        </ul>
      </>
    );
  }
}
