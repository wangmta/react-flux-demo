import React, { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';

// arrow function component
const ManageCoursePage = props => {
  // array destructuring, state var, setter function
  const [errors, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: ''
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then(_course => {
        setCourse(_course);
      });
    }
  }, [props.match.params.slug]);
  // watch for the change of the url, if the url changes, then re-run and re-render

  // function handleTitleChange(event) {
  //   // avoid mutating state
  //   // create a copy of the state var
  //   // const updatedCourse = { ...course };
  //   // updatedCourse.title = event.target.value;
  //   const updatedCourse = { ...course, title: event.target.value };
  //   setCourse(updatedCourse);
  // }

  function handleChange(event) {
    // computed property
    const updatedCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updatedCourse);
  }

  // more concise way of the above code
  // function handleChange({ target }) {
  //   setCourse({
  //     ...course,
  //     [target.name]: target.value
  //   });
  // }

  function formIsValid() {
    // to distinguish between state var 'error'
    const _errors = {};
    if (!course.title) _errors.title = 'Title is required';
    if (!course.authorId) _errors.authorId = 'Author ID is required';
    if (!course.category) _errors.category = 'Category is required';

    setError(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push('/courses');
      toast.success('Course saved.');
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" />
      {props.match.params.slug} */}
      <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
};

export default ManageCoursePage;

// {props.match.params.slug} is passed in by react router
