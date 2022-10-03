import React, { Component } from "react";

function Menu() {
  return <p>Menu</p>;
}
class Header extends Component {
  render() {
    return (
      <header
        id="site-header"
        className="flex flex-row flex-no-wrap bg-dark-1 p-4 justify-between w-4/5 mx-auto rounded-3xl top-5 relative items-center backdrop-blur-sm"
      >
        <h1 className="text-5xl text-white w-full">Wave Box</h1>
        <Menu></Menu>
      </header>
    );
  }
}

export default Header;
