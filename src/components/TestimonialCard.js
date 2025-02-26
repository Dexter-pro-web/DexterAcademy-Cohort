import React from "react";
import "../styles/Testimonials.css";

const TestimonialCard = ({ name, role, testimonial, image }) => {
  return (
    <div className="card">
      <div className="profile-container">
        <img
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={name}
          className="profile-img"
        />
        <div className="profile-info">
          <h3 className="name">{name}</h3>
          <p className="role">{role}</p>
        </div>
      </div>
      <p className="testimonial">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
