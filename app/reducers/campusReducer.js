import axios from 'axios';

// Action Types
const GET_CAMPUS = 'GET_CAMPUS';

// Action Creators
export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

// Thunk Creators
export function fetchCampus (dispatch, campusId) {
  return function thunk () {
    return axios.get('/api/campuses/' + campusId)
      .then(res => res.data)
      .then(campus => {
        const action = getCampus(campus);
        dispatch(action);
    })
    .catch(console.error);
  };
}

// Reducer
export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
