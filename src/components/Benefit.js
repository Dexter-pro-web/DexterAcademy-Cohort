import React from 'react';
import "../styles/Benefit.css"

const Benefits = () => {
  return (
    <div className='benefit-container'>
    <h1>Key Benefits of our Academy</h1>
    <div className="benefits-inner">
      <div className="benefits-content">
        <p>FEATURES</p>
        <ul className="benefits-list">
          <li>Comprehensive training programs tailored to industry needs.</li>
          <li>Hands-on projects and real-world applications.</li>
          <li>Access to course materials even after completion.</li>
          <li>One-on-one mentorship and career guidance.</li>
          <li>Certificate upon successful completion.</li>
          <li>Direct access to an exclusive job placement network.</li>
        </ul>
      </div>
      <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/images/benefit-img.png`} alt='student working on laptop'/>
      </div>
    </div>
    </div>
  );
}

export default Benefits;
