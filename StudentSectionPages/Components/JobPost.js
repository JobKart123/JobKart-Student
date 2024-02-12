// JobPost.js

import React from 'react';
import './JobPost.css'; // Import the CSS file

const JobPost = () => {
    return (
        <div className="job-post-container">
            <div className="header">
                <h1>JOB POST</h1>
                <div className="icon">
                    <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></box-icon>
                </div>
            </div>
            <div className="job-cards">
                {/* Repeat this card section 12 times */}
                <div className="card">
                    <h2>Company Name</h2>
                    <div className="details">
                        <div className="left">
                            <span>Location</span>
                            <span>Full Time</span>
                        </div>
                        <div className="right">
                            <span>₹75 LPA CTC</span>
                        </div>
                    </div>
                </div>
                {/* Repeat end */}
            </div>
        </div>
    );
}

export default JobPost;
