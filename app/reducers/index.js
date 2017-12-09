/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';

const rootReducer = combineReducers({
  campuses: campusesReducer
});
/*const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};*/

export default rootReducer
