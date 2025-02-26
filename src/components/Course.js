import React from "react";
import courses from "../Data.js/course-data";
import CourseCard from "./CourseCard";
import "../styles/Course.css"

function Course (){
    return(
        <div className="course-container">
        <h1 className="heading">Courses & Offerings</h1>
  
        <div className="course-grid">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              buttonText={course.buttonText}
              imgSrc={course.imgSrc} 
            />
          ))}
        </div>
      </div>
    );
}

export default Course;