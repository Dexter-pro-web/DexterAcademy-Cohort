import React from "react";
import "../styles/Course.css";

const CourseCard = ({ title, description, buttonText, imgSrc }) => {
  
  const scrollToPayments = () => {
    const paymentsSection = document.getElementById("payments");
    if (paymentsSection) {
      paymentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="course-card">
      <div className="course-header">
        <img
          src={`${process.env.PUBLIC_URL}${imgSrc}`}
          alt={title}
          className="course-image"
        />
        <h3 className="course-title">{title}</h3> {/* Title */}
      </div>
      <p className="course-description">{description}</p> {/* Description */}
      {/* Attach the scrollToPayments function to the button's onClick event */}
      <button className="course-button" onClick={scrollToPayments}>
        {buttonText}
      </button>
    </div>
  );
};

export default CourseCard;
