import React, { useState } from "react";
import WhyCard from "./WhyCard";
import "../styles/Why.css";

const Why = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToCurriculum = () => {
    const curriculumSection = document.getElementById("curriculum");
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="why-container">
      <h2 className="why-heading"data-aos="fade-up" data-aos-duration="50000">WHY DEXTER ACADEMY</h2>
      <p className="why-subheading"data-aos="fade-up" data-aos-duration="50000">
        Our bootcamps are project-based, 100% live sessions with limited seats.
        Get a glimpse of the valuable skills you'll gain.
      </p>

      <div className="why-grid" data-aos="zoom-in" data-aos-duration="50000">
        <WhyCard
          icon="/icons/usability.png"
          title="Usability & Interaction Design"
          description="Master the principles of intuitive and user-friendly digital experiences."
        />
        <WhyCard
          icon="/icons/visualization.png"
          title="Data Visualization & Storytelling"
          description="Learn to interpret complex data and present insights effectively."
        />
        <WhyCard
          icon="/icons/metrics.png"
          title="Metrics & Growth Strategy"
          description="Understand key performance indicators and data-driven decision-making."
        />
        <WhyCard
          icon="/icons/integration.png"
          title="Frontend & Backend Integration"
          description="Build seamless, responsive, and dynamic web applications."
        />
        <WhyCard
          icon="/icons/career.png"
          title="Career Support Sessions"
          description="Live interview simulations, personalized feedback, and portfolio refinement."
        />
      </div>

      <button
        className={`request-btn ${isHovered ? "no-arrow" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={scrollToCurriculum}
      >
        Request Full Curriculum {isHovered ? "" : "➜"}
      </button>
    </div>
  );
};

export default Why;
