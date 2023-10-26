// Section.js
import React from "react";
import "./syllabus.css";
function Syllabus({ title, percentage }) {
  return (
    <div className="syllabus_div">
      <h3>{title}</h3>
      <div>
        <div>
          <progress value={percentage} min="0" max="100"></progress>
        </div>
        <span className="percentage_styles">{percentage}%</span>
      </div>
    </div>
  );
}

export default Syllabus;
