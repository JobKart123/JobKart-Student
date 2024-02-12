import React from 'react';
import './StudentDash.css'; // Import the CSS file

const StudentDash = () => {
    return (
        <div className="student-dash-container">
            <div className="header">
                <h1>PLACEMENT PORTAL</h1>
                <div className="right">
                    <span>Dashboard</span>
                    <span>Profile</span>
                    <span>Logout</span>
                </div>
            </div>
            <div className="content">
                <div className="left-column">
                    <h2>Welcome, Student</h2>
                    <div className="logo">Logo</div>
                    <ul>
                        <li>Dashboard</li>
                        <li>Update Profile</li>
                        <li>Job Post</li>
                        <li>Opt Out Jobs</li>
                    </ul>
                </div>
                <div className="right-column">
                    <div className="progress-graph">Progress Graph</div>
                    <div className="company-cards">
                        <div className="card">
                            <h3>Company Name</h3>
                            <div className="details">
                                <span className="icon">Location Icon</span>
                                <span>Location Name</span>
                            </div>
                            <div className="details">
                                <span className="icon">Timer Icon</span>
                                <span>Full Time</span>
                            </div>
                            <div className="details">
                                <span>₹75 lakh</span>
                            </div>
                        </div>
                        {/* More cards here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDash;
