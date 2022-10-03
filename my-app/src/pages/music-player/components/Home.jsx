import React, { Component } from "react";
import { Router, Link, Route } from "react-router-dom";

import Search from "./search";
import { Glow3 } from "./Glows";
import headphone from "../images/headphone.png";
import svg1 from "../images/right.svg";

class Home extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Search getResult={this.props.getResult} />
        <Glow3 />
      </React.Fragment>
    );
  }
}

export default Home;
