// CourseCard.js
import React from "react";
import "../styles/Course.css"

const CourseCard = ({ title, description, buttonText, imgSrc }) => {
  return (
    <div className="course-card">
      <div className="course-header">
        <img src={`${process.env.PUBLIC_URL}${imgSrc}`} alt={title} className="course-image" />
        <h3 className="course-title">{title}</h3> {/* Title */}
      </div>
      <p className="course-description">{description}</p> {/* Description */}
      <button className="course-button">{buttonText}</button> {/* Button */}
    </div>
  );
};

export default CourseCard;
