import React, { useState } from "react";
import axios from "axios";
import "./ResumeUpload.css";

const ResumeUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a resume to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadMessage("Resume uploaded successfully!");
      console.log("Upload Response:", response.data);
      onUpload(response.data);
    } catch (error) {
      setUploadMessage("Upload failed. Please try again.");
      console.error("Upload Error:", error);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Resume</h2>
      <p>Upload your resume and let AI find the best job matches for you.</p>

      <form onSubmit={handleUpload} className="upload-form">
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <button type="submit">Upload Resume</button>
      </form>

      {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
    </div>
  );
};

export default ResumeUpload;
