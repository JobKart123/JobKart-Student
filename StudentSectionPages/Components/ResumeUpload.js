import React from 'react';
import './ResumeUpload.css';

const ResumeUpload = () => {
    return (
        <div className="resume-upload-container">
            <h2 className="heading">RESUME UPLOAD</h2>
            <div className="form-container">
                <div className="input-field">
                    <label>Upload PDF Resume</label>
                    <input type="file" accept=".pdf" />
                </div>
                <div className="input-field">
                    <label>Upload Video Resume</label>
                    <input type="file" accept="video/*" />
                </div>
                <div className="button-container">
                    <button className="save-btn">Save</button>
                    <button className="edit-btn">Edit</button>
                </div>
            </div>
        </div>
    );
}

export default ResumeUpload;
