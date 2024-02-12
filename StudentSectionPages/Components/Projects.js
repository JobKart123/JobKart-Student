import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="heading">PROJECTS</h2>
            <div className="form-container">
                <div className="input-field">
                    <label>Project Title</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>Description</label>
                    <textarea rows="4"></textarea>
                </div>
                <div className="input-field">
                    <label>Technology</label>
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
                <div className="button-container">
                    <button className="save-btn">Save & Next</button>
                    <button className="edit-btn">Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
