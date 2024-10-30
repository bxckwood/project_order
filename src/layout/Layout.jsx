import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import ligthing from "./lighting2.png";
import ligthing2 from "./lighting3.png";

export default function Layout() {
  return (
    <>
      <div className="container">
        <header className="light_papa">
          <img src={ligthing} className="light" />
          <img src={ligthing2} className="light2" />
        </header>
        <div className="container2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
