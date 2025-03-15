import React from 'react';
import './SubjectNav.css';

function SubjectNav({ subjectName, units }) {
  return (
    <div className="subject-nav-container">
      <h2 className="subject-title">{subjectName}</h2>
      <div className="units-grid">
        {units.map((unit, index) => (
          <div key={index} className="unit-box">
            {unit}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectNav;