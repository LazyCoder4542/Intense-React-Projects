//import React, { Component } from "react";
import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import headphone from "../images/headphone.png";
import svg1 from "../images/right.svg";
import logo from "../images/logo.svg";
import { Glow1, Glow2 } from "./Glows";
function Welcome() {
  return (
    <React.Fragment>
      <div className="hero m-auto p-10 flex flex-col">
        <div
          className="mx-auto my-6 relative flex items-center"
          style={{ width: 250 + "px" }}
        >
          <Glow2 />
          <img src={headphone} alt="headphone" className="relative" />
        </div>
        <div className="text text-center relative">
          <Glow1 />
          <p className="tagline text-2xl font-bold mb-2">Getting Started</p>
          <p className="subline text-sm opacity-80 font-light">
            Getting Started getting
          </p>
          <Link to="../">
            <button className="py-4 px-5 my-10">
              <span>Lets Go</span>
              <span>
                <img src={svg1} className="h-4" alt="" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="footer absolute bottom-0 table left-1/2 -translate-x-1/2 p-4">
        <img src={logo} alt="WaveBox" className="h-10" />
      </div>
    </React.Fragment>
  );
}

export default Welcome;
