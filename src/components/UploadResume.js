import React, { useState } from "react";
import axios from "axios";

const UploadResume = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadResume = async () => {
        if (!file) {
            setMessage("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("resume", file);

        try {
            await axios.post("http://localhost:5000/api/resume/upload", formData);
            setMessage("✅ Resume uploaded successfully!");
        } catch (error) {
            setMessage("❌ Error uploading resume.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg p-6 rounded-lg w-1/3 text-center">
                <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>
                <input type="file" className="mb-4 border p-2 w-full" onChange={handleFileChange} />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={uploadResume}
                >
                    Upload
                </button>
                {message && <p className="mt-4 text-lg">{message}</p>}
            </div>
        </div>
    );
};

export default UploadResume;
