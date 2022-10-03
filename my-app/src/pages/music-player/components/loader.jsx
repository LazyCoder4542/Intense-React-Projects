import React from "react";

import loader from "../images/loader.png";
export default function Loader() {
  return (
    <React.Fragment>
      <img src={loader} alt="" className="m-auto" />
    </React.Fragment>
  );
}
