import { useState } from "react";
import "../styles/Hero.css";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollToPayments = () => {
    const paymentsSection = document.getElementById("payments");
    if (paymentsSection) {
      paymentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCurriculum = () => {
    const curriculumSection = document.getElementById("curriculum");
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-txt" data-aos="zoom-in" data-aos-duration="50000">
          <p id="bootcamp-title">PRODUCT DESIGN BOOTCAMP</p>
          <h1>
            Learn how to build innovative and impactful tech solutions from
            industry-leading professionals
          </h1>
          <p>
            3-week project-based live classes, 3 weeks of mentorship, Flexible
            payment options
          </p>

          <div className="hero-btns">
            <button
              className={`apply-btn ${isHovered ? "no-arrow" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={scrollToPayments}
            >
              Apply Now {isHovered ? "" : "➜"}
            </button>
            <button className="curriculum-btn"
            onClick={scrollToCurriculum}
            >Request Curriculum</button>
          </div>

          <p className="stats">
            <p>
              <span id="no">50+ </span> have taken some of our tech courses
            </p>
          </p>
          <div className="cohort-date">
            <p>Next Cohort Starts March 15th, 2025</p>
            <img
              src={process.env.PUBLIC_URL + "/images/cohort-img.png"}
              alt="Hero"
              className="main-img"
            />
          </div>
        </div>

        <div className="hero-img" data-aos="fade-up" data-aos-duration="50000">
          <img
            src={process.env.PUBLIC_URL + "/images/hero-img.png"}
            alt="Hero"
            className="main-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
