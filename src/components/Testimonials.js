import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../Data.js/testimonial-data";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 data-aos="fade-up" data-aos-duration="50000">Testimonials</h2>
      <div className="cards-container" data-aos="zoom-in" data-aos-duration="50000">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
