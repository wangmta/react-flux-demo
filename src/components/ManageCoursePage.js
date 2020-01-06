import React, { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
// import * as courseApi from '../api/courseApi';
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseActions';
import { toast } from 'react-toastify';

import { getCourses } from '../api/courseApi';
// arrow function component
const ManageCoursePage = props => {
  // array destructuring, state var, setter function
  const [errors, setError] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: ''
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      // courseApi.getCourseBySlug(slug).then(_course => {
      //   setCourse(_course);
      // });
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange); // cleanup
  }, [courses.length, props.match.params.slug]);
  // if anything in this array changes rerun the useEffect
  // watch for the change of the url, if the url changes, then re-run and re-render

  function onChange() {
    setCourses(courseStore.getCourses());
  }

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
    // courseApi.saveCourse(course).then(() => {
    //   props.history.push('/courses');
    //   toast.success('Course saved.');
    // });
    courseActions.saveCourse(course).then(() => {
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
