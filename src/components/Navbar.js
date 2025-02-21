import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>AI Resume Matcher</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Job Listings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
