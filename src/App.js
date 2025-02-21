import React, { useState } from "react";
import ResumeUpload from "./components/ResumeUpload";
import JobListings from "./components/JobListings";
import "./App.css";

const App = () => {
  const [jobsVisible, setJobsVisible] = useState(false);

  const handleResumeUpload = (data) => {
    console.log("Resume Uploaded:", data);
    setJobsVisible(true);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to AI Resume Matcher</h1>
        <p>Your AI-powered job matching assistant</p>
      </header>

      <section className="main-content">
        <ResumeUpload onUpload={handleResumeUpload} />

        {jobsVisible && <JobListings />}
      </section>

      <footer className="app-footer">
        <p>© 2025 AI Resume Matcher | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
