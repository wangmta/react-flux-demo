import { EventEmitter } from 'events';
// imported from node, can be found on node docs
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.DELETE_COURSES:
      _courses = _courses.filter(course => course.id !== +action.id);
      // action.id may be a string => parseInt(action.id, 10)
      store.emitChange();
      break;
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSES:
      _courses = _courses.map(course => (course.id === action.course.id ? action.course : course));
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    default:
    // nothing to do
  }
});

export default store;
