import React, { useState, useEffect } from 'react';
// import { getCourses } from '../api/courseApi';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import * as courseActions from '../actions/courseActions';

// smart component
function CoursesPage() {
  // initialize state variable and the setter function
  // initialize the courses to get them from store
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    // the 2nd argument must be passed in, otherwise the useEffect will be called every time the function rerenders
    // the arg (dependency array) tells the function when to re-run
    // passing in empty [] means only run once
    // getCourses().then(_courses => setCourses(_courses));
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) courseActions.loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount (when navigate to another page)
  }, []);

  function onChange() {
    // use courseStore instead of calling api directly
    setCourses(courseStore.getCourses());
  }

  // function component doesn't need render(), whatever returned is rendered
  // props passes data down from parent to child component
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={courseActions.deleteCourse} />
    </>
  );
}

export default CoursesPage;
