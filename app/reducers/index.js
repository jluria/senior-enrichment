/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';
import studentsReducer from './studentsReducer';
import campusReducer from './campusReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  campus: campusReducer,
  student: studentReducer
});

export default rootReducer
