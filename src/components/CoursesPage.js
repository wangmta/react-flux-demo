import React, { useState, useEffect } from 'react';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

// smart component
function CoursesPage() {
  // initialize state variable and the setter function
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // the 2nd argument must be passed in, otherwise the useEffect will be called every time the function rerenders
    // the arg (dependency array) tells the function when to re-run
    // passing in empty [] means only run once
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  // function component doesn't need render(), whatever returned is rendered
  // props passes data down from parent to child component
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
