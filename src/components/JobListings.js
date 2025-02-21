import React from "react";
import "./JobListings.css";

const jobs = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "Remote", link: "#" },
  { id: 2, title: "Full-Stack Developer", company: "WebSolutions", location: "New York, NY", link: "#" },
  { id: 3, title: "Frontend Developer", company: "InnovateX", location: "San Francisco, CA", link: "#" },
  { id: 4, title: "Backend Engineer", company: "CodeWorks", location: "Seattle, WA", link: "#" },
  { id: 5, title: "AI Engineer", company: "DeepAI", location: "Boston, MA", link: "#" },
];

const JobListings = () => {
  return (
    <div className="job-listings-container">
      <h2>Matching Job Listings</h2>
      <p>Based on your resume, here are some recommended jobs for you.</p>
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <a href={job.link} className="apply-btn">Apply Now</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
