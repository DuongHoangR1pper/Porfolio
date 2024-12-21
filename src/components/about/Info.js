import React from "react";

export default function Info() {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about-tile">Experience</h3>
        <span className="about-subtitle">Intern</span>
      </div>
      <div className="about-box">
        <i className="bx bx-briefcase about-icon"></i>
        <h3 className="about-tile">Completed</h3>
        <span className="about-subtitle">2+ Project</span>
      </div>
      <div className="about-box">
        <i className="bx bx-support about-icon "></i>
        <h3 className="about-tile">Support</h3>
        <span className="about-subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
