import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import "./MusicPlayer.css";

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Page404 from "./components/404";

class MusicPlayer extends Component {
  state = {
    isVisited: localStorage.getItem("isVisited") === "true" ? true : false,
    accessToken: "",
  };
  constructor() {
    super();
    localStorage.setItem("isVisited", "true");
    var items = { one: [1, 2, 3], two: [4, 5, 6], three: [7, 8, 9] };
    /*var Arr = [];
    Object.entries(items).forEach((item) => {
      Arr = Arr.concat(item[1]);
    });
    console.log(Arr);*/
  }
  componentDidMount() {
    var clientID = "d4a761107257443a8f8f2dee1bb3cfa9";
    var clientSecret = "adaaefac3e004dd3b1b3862cb30d2787";
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => this.setState({ accessToken: data.access_token }));
  }
  getSearchEntry = (entry, filter) => {
    console.log("from player called");
    return this.search(entry, filter);
  };
  async search(entry, filter) {
    var type = filter.join(",");
    var input = entry;
    var limit = Math.round(20 / filter.length);
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.state.accessToken}`,
      },
    };
    var result = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=${type}&limit=${limit}`,
      searchParameters
    )
      .then((res) => res.json())
      .then((data) => {
        var Arr = [];
        Object.entries(data).forEach((item) => {
          Arr = Arr.concat(item[1].items);
        });
        return Arr;
      });
    console.log("result returned");
    //localStorage.setItem("tempResult", JSON.stringify(result));
    return result;
  }
  preloadImages() {}
  render() {
    return (
      <Router>
        <div className="font-ff-main text-white relative min-h-screen overflow-hidden">
          <Routes>
            <Route
              exact
              path="/"
              element={
                this.state.isVisited ? (
                  <Home getResult={this.getSearchEntry} />
                ) : (
                  <Navigate to="./welcome" replace={true} />
                )
              }
            />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default MusicPlayer;
