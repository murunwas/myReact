//import liraries
import React, { Component } from "react";
import Todos from "../components/Todos";

// create a component
class Home extends Component {
  render() {
    return (
      <div>
        <h1> Home</h1>
        <Todos />
      </div>
    );
  }
}

//make this component available to the Home
export default Home;
