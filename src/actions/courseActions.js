import dispathcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';

// action creator
export function saveCourse(course) {
  courseApi.saveCourse(course).then(savedCourse => {
    dispathcher.dispatch({
      actionType: 'CREATE_COURSE',
      course: savedCourse
    });
  });
}
