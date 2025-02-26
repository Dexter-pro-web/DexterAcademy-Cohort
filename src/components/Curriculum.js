import React from 'react';
import "../styles/Curriculum.css"

const Curriculum = () => {
  return (
    <div className="curriculum-container">
        <div className="curriculum-inner">
      <div className="content">
        <h1>Bootcamp starts<br /> March 15th, 2025</h1>
        <p>Request a curriculum now.</p>
      </div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+234" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="@gmail.com" />
          </div>
          <button type="submit" className="submit-button">Request Curriculum</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Curriculum;
