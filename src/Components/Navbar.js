import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="element">
        <a href="/">Calculator</a>{" "}
      </div>
      <div className="element">
        <a href="/exchange">Exchange</a>
      </div>
      <div className="element">
        <a href="/unitConverter">Unit Converter</a>
      </div>
    </div>
  );
}
