import React, { useState } from 'react';
import WhyCard from './WhyCard';
import '../styles/Why.css';  // CSS import

const Why = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover logic

  return (
    <div className="why-container">
      <h2 className="why-heading">WHY DEXTER ACADEMY</h2>
      <p className="why-subheading">
        Our bootcamps are project-based, 100% live sessions with limited seats.
        Get a glimpse of the valuable skills you'll gain.
      </p>
      
      <div className="why-grid">
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
        className={`request-btn ${isHovered ? 'no-arrow' : ''}`} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Request Full Curriculum {isHovered ? '' : '➜'}
      </button>
    </div>
  );
};

export default Why;
