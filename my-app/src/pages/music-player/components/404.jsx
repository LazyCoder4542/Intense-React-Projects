import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Router } from "react-router-dom";
import { Glow1 } from "./Glows";

function Page404() {
  return (
    <React.Fragment>
      <div className="wrapper flex min-h-screen items-center justify-center flex-col">
        <Glow1 />
        <h1 className="text-3xl font-semibold">404</h1>
        <p className="text-lg">Page not Found!</p>
        <Link to="../">
          <button className="mt-10">
            <span>Back Home</span>
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Page404;
