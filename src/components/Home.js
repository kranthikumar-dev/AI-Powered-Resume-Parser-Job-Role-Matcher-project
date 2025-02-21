import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to AI Resume Matcher</h1>
      <p>Upload your resume and find the perfect job match.</p>
      <Link to="/jobs">
        <button>View Jobs</button>
      </Link>
    </div>
  );
}

export default Home;
