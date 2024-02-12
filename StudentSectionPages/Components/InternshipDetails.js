import React from 'react';
import './InternshipDetails.css';

const InternshipDetails = () => {
    return (
        <div className="internship-details-container">
            <h2 className="heading">EXPERIENCE/INTERNSHIP</h2>
            <div className="form-container">
                <div className="input-field">
                    <label>Company Name</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>Role</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>Employment Type</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>Start Date</label>
                    <input type="date" />
                </div>
                <div className="input-field">
                    <label>End Date</label>
                    <input type="date" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea rows="4"></textarea>
                </div>
                <div className="button-container">
                    <button className="save-btn">Save & Next</button>
                    <button className="edit-btn">Edit</button>
                </div>
            </div>
        </div>
    );
}

export default InternshipDetails;
