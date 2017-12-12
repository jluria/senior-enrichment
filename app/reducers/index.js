/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';
import studentsReducer from './studentsReducer';
import campusReducer from './campusReducer';

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  campus: campusReducer
});

export default rootReducer
