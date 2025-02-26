import React from "react";

const WhyCard = ({ icon, title, description }) => {
  return (
    <div className="why-card">
      <div className="icon-title-container">
        <img
          src={`${process.env.PUBLIC_URL}${icon}`}
          alt="icon"
          className="icon"
        />
        <h3 className="title">{title}</h3>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default WhyCard;
