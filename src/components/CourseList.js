import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// dumb component
// every function component receives a props as the sole arg
function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    props.deleteCourse(course.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={'/course/' + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// add a property to a functions
// propType is only available in dev, prod will remove it for performance
// CourseList.propTypes = {
//   courses: PropTypes.array.isRequired
// };
CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};
// set a default value in case no data is returned
CourseList.defaultProps = {
  courses: []
};

export default CourseList;

// this props.courses is passed through parent component
