import React from 'react';
import TextInput from './TextInput';
import PropTypes from 'prop-types';
// Controlled Component, if the data doesn't change, UI doesn't change, if input is not controlled, any keystroke will be lost immediately
// declare change handler

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ''}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && <div className="alert alert-danger">{props.errors.authorId}</div>}
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
};
