import React, { useState, useEffect } from 'react';
import { getCourses } from '../api/courseApi';

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
  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;
