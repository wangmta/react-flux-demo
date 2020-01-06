import dispathcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

// action creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispathcher.dispatch({
      actionType: course.id ? actionTypes.UPDATE_COURSES : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispathcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispathcher.dispatch({
      actionType: actionTypes.DELETE_COURSES,
      id: id
    });
  });
}
