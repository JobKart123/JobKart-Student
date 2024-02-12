import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
    return (
        <div className="technical-skills-container">
            <div className="skills-container">
                <h2>Technical Skills</h2>
                <div className="input-box">
                    <input type="text" placeholder="Skill 1" />
                    <input type="text" placeholder="Skill 2" />
                    <input type="text" placeholder="Skill 3" />
                    <input type="text" placeholder="Skill 4" />
                    <input type="text" placeholder="Skill 5" />
                </div>
            </div>
            <div className="skills-container">
                <h2>Non-Technical Skills</h2>
                <div className="input-box">
                    <input type="text" placeholder="Skill 1" />
                    <input type="text" placeholder="Skill 2" />
                    <input type="text" placeholder="Skill 3" />
                    <input type="text" placeholder="Skill 4" />
                    <input type="text" placeholder="Skill 5" />
                </div>
            </div>
            <div className="button-container">
                <button className="save-edit-btn">Save & Next</button>
                <button className="save-edit-btn">Edit</button>
            </div>
        </div>
    );
}

export default TechnicalSkills;
