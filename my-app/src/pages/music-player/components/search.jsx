import React, { Component } from "react";
import { twMerge } from "tailwind-merge";

import svg1 from "../images/search.svg";
import Loader from "./loader";
import profile from "../images/profile.png";

class Search extends Component {
  state = {
    focus: false,
    testArray: ["Bottle", "Rattle", "Battle", "Ottle"],
    searchEntry: "",
    allFilters: ["artist", "playlist", "track", "show", "episode"],
    //selectedFilters: ["artist", "playlist", "track", "show"],
  };
  constructor() {
    super();
    //console.log(JSON.parse(localStorage.getItem("userFilters")));
    this.state.selectedFilters =
      localStorage.getItem("userFilters") != null
        ? JSON.parse(localStorage.getItem("userFilters"))
        : [...this.state.allFilters];
  }
  handleChange = (e) => {
    this.setState({ searchEntry: e.target.value });
    if (e.target.value.trim().length > 0) {
      this.setState({
        focus: true,
      });
    } else {
      this.setState({
        focus: false,
      });
    }
    this.updateResults();
    /*setTimeout(() => {
      this.setState({
        result: this.props.getResult(this.state.searchEntry).then((result) => {
          return result;
        }),
      });
    }, 0);*/
  };
  displayResults = (arg) => {
    /*if (entry.length > 0) {
      this.state.testArray.forEach((items) => {
        let bool = true;
        if (items.toLowerCase().includes(entry.toLowerCase())) {
          bool = bool && true;
        } else {
          bool = false;
        }
        if (bool) {
          result.push(items);
        }
      });
    }*/
    //console.log(JSON.parse(localStorage.getItem("tempResult")));
    if (this.state.result) {
      return (
        <div
          className="results bg-white bg-opacity-[6%] h-10 rounded-2xl min-h-[200px] p-2"
          hidden={arg}
        >
          <div className="flex flex-col gap-4 h-full overflow-x-hidden overflow-y-auto relative">
            {this.state.result.map((items, idx) => {
              if (items != null) {
                //console.clear();
                console.log(items);
                var type = items.type;
                var name = items.name;
                var id = items.id;
                function reverse(str) {
                  let revStr = "";
                  for (let i = str.length - 1; i >= 0; i--) {
                    revStr += str[i];
                  }
                  return revStr;
                }
                function concatNum(number) {
                  var string = "";
                  var rev_string = reverse(number.toString());
                  if (rev_string.length > 3) {
                    if (rev_string.length > 6) {
                      //Millions or More
                      if (rev_string.length > 9) {
                        //Billion or More
                        let decimal =
                          parseInt(rev_string[8]) >= 5
                            ? `.${rev_string[8]}`
                            : "";
                        string = `${reverse(rev_string.slice(9)) + decimal}B`;
                      } else {
                        //Million
                        let decimal =
                          parseInt(rev_string[5]) >= 5
                            ? `.${rev_string[5]}`
                            : "";
                        string = `${reverse(rev_string.slice(6)) + decimal}M`;
                      }
                    } else {
                      //Thousand
                      let decimal =
                        parseInt(rev_string[2]) >= 5 ? `.${rev_string[2]}` : "";
                      string = `${reverse(rev_string.slice(3)) + decimal}K`;
                    }
                  } else {
                    string = reverse(rev_string);
                  }
                  return string;
                }
                function concatTime(ms) {
                  let hours = 0;
                  let minutes = 0;
                  let seconds = Math.round(parseInt(ms)/1000)
                  while (seconds >= 60) {
                    seconds -= 60
                    minutes++
                  }
                  while (minutes >= 60) {
                    minutes -= 60
                    hours++
                  }
                  return (
                    [(hours > 0 ? `${hours}h`: null),
                    (minutes > 0 ? `${minutes}m`: null),
                    (seconds > 0 ? `${seconds}s`: null),
                  ].join(' ')
                  )
                }
                console.log(concatTime('65000'))
                var image = items.images ? items.images[0] : null;
                if (type === "artist") {
                  var followers = items.followers.total;
                  var popularity = items.popularity;
                  return (
                    <div
                      key={idx}
                      id={`${type}_${id}`}
                      className="flex gap-x-4 items-center"
                    >
                      <span className="image w-[2.5rem]">
                        <img
                          src={image != null ? image.url : profile}
                          alt={name}
                          className={twMerge(
                            "rounded-full object-cover object-center h-10 w-10 max-h-[none] max-w-none"
                          )}
                        />
                      </span>
                      <span className="w-full inline-flex flex-wrap gap-x-10 overflow-hidden">
                        <span className="truncate w-full">{name}</span>
                        <span className="text-[0.75rem] text-opacity-50">
                          {concatNum(followers)}
                        </span>
                        <span className="text-[0.75rem] text-opacity-50">
                          {popularity + "%"}
                        </span>
                      </span>
                      <span className="text-[0.75rem] text-opacity-20">{`~${
                        type.charAt(0).toUpperCase() + type.slice(1)
                      }`}</span>
                    </div>
                  );
                }
                if (type === "track") {
                  var duration = items.duration_ms;
                  var popularity = items.popularity;
                  return (
                    <div
                      key={idx}
                      id={`${type}_${id}`}
                      className="flex gap-x-4 items-center w-full"
                    >
                      <span className="image w-[2.5rem]">
                        <img
                          src={image != null ? image.url : profile}
                          alt={name}
                          className={twMerge(
                            "rounded-full object-cover object-center h-10 w-10 max-h-[none] max-w-none"
                          )}
                        />
                      </span>
                      <span className="w-full flex flex-wrap gap-x-10 overflow-hidden">
                        <span className="truncate w-full">{name}</span>
                        <span className="text-[0.75rem] text-opacity-50">
                          {concatTime(duration)}
                        </span>
                        <span className="text-[0.75rem] text-opacity-50">
                          {popularity + "%"}
                        </span>
                      </span>
                      <span className="text-[0.75rem] text-opacity-20">{`~${
                        type.charAt(0).toUpperCase() + type.slice(1)
                      }`}</span>
                    </div>
                  );
                }
                if (type === "playlist") {
                  var description = items.description;
                  return (
                    <div
                      key={idx}
                      id={`${type}_${id}`}
                      className="flex gap-x-4 items-center"
                    >
                      <span className="image w-[2.5rem]">
                        <img
                          src={image != null ? image.url : profile}
                          alt={name}
                          className={twMerge(
                            "rounded-full object-cover object-center h-10 w-10 max-h-[none] max-w-none"
                          )}
                        />
                      </span>
                      <span className="w-full flex flex-wrap gap-x-10 overflow-hidden">
                        <span className="truncate w-full">{name}</span>
                        <span className="truncate text-[0.75rem] text-opacity-50 w-full">
                          {description}
                        </span>
                      </span>
                      <span className="text-[0.75rem] text-opacity-20">{`~${
                        type.charAt(0).toUpperCase() + type.slice(1)
                      }`}</span>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="results bg-white bg-opacity-[6%] min-h-20 rounded-2xl max-h-[200px] p-2"
          hidden={arg}
        >
          <div className="loading">
            <Loader />
          </div>
        </div>
      );
    }
  };
  updateResults() {
    this.setState({
      result: null,
    });
    setTimeout(() => {
      (async () => {
        let result = await this.props.getResult(
          this.state.searchEntry,
          this.state.selectedFilters
        );
        this.setState({
          result: result,
        });
      })();
    }, 0);
  }
  filterStyles(name) {
    console.log("called");
    if (this.state.selectedFilters.includes(name)) {
      return "selected";
    }
    return "";
  }
  render() {
    return (
      <div className="search w-4/5 overflow-x-hidden absolute top-5 left-1/2 -translate-x-1/2 flex flex-col gap-y-4">
        <div className="search-box bg-white bg-opacity-[6%] flex px-5 py-3 justify-between gap-x-4 items-center rounded-2xl">
          <span className="w-6">
            <img src={svg1} alt="" />
          </span>
          <span className="w-full flex">
            <input
              type="text"
              placeholder="search song"
              className="search-input bg-transparent placeholder-opacity-40 px-1 placeholder-white w-full font-light align-middle"
              onChange={this.handleChange}
            />
            <span
              className="text-opacity-40 font-light text-white"
              onClick={() => {
                document.querySelector(".search-input").value = null;
                this.setState({
                  focus: false,
                  searchEntry: "",
                });
                setTimeout(() => {
                  console.log(this.state.searchEntry);
                }, 0);
              }}
              hidden={!this.state.focus}
            >
              clear
            </span>
          </span>
        </div>
        <div
          className="filter-tab bg-white bg-opacity-[6%] rounded-2xl p-2"
          hidden={!this.state.focus}
        >
          <div className="flex gap-2 flex-wrap text-sm">
            {this.state.allFilters.map((filter, idx) => {
              return (
                <span
                  value={filter}
                  className={`${this.filterStyles(filter)}`}
                  key={idx}
                  onClick={() => {
                    if (this.state.selectedFilters.includes(filter)) {
                      this.setState({
                        selectedFilters: this.state.selectedFilters.filter(
                          (itm) => itm !== filter
                        ),
                      });
                    } else {
                      this.setState({
                        selectedFilters: this.state.selectedFilters.concat([
                          filter,
                        ]),
                      });
                    }
                    setTimeout(() => {
                      localStorage.setItem(
                        "userFilters",
                        JSON.stringify(this.state.selectedFilters)
                      );
                    }, 0);

                    this.updateResults();
                  }}
                >{`${filter.charAt(0).toUpperCase() + filter.slice(1)}s`}</span>
              );
            })}
          </div>
        </div>
        {this.displayResults(!this.state.focus)}
      </div>
    );
  }
}

export default Search;
