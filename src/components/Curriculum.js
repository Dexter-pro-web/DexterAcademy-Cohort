import React from "react";
import "../styles/Curriculum.css";

const Curriculum = () => {
  return (
    <div className="curriculum-container" id="curriculum">
      <div
        className="curriculum-inner"
        data-aos="zoom-up"
        data-aos-duration="50000"
      >
        <div className="content">
          <h1>
            Bootcamp starts
            <br /> March 15th, 2025
          </h1>
          <p>Request a curriculum now.</p>
        </div>
        <div className="form-container">
          <form
            action="https://formsubmit.co/9ae163426f95cae73afb2f829ac4268c" 
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
            <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                name="course"
                placeholder="Course of interest"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+234"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="@gmail.com"
                required
              />
            </div>
            
            {/* Hidden input for form submission */}
            <input
              type="hidden"
              name="_next"
              value="https://dexter-academy-cohort.vercel.app/thank-you"
            />
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="submit-button">
              Request Curriculum
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
