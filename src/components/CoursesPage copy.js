import React from 'react';
import { getCourses } from '../api/courseApi';

class CoursesPage extends React.Component {
  // initialize state in constructor
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  // react lifecycle event, only available in class component, in function component needs to use hooks
  // component must be mounted first, then set state
  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses: courses });
    });
  }

  renderRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
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
          <tbody>{this.state.courses.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

// index.js:1 Warning: Each child in a list should have a unique "key" prop.
// key should not change
// key is how react find the item in an Array
// key is unique to the array, not globally

export default CoursesPage;
