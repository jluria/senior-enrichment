import axios from 'axios';

// Action Types
const GET_STUDENT = 'GET_STUDENT';

// Action Creators
export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

// Thunk Creators
export function fetchStudent (dispatch, studentId) {
  return function thunk () {
    return axios.get('/api/students/' + studentId)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student);
        dispatch(action);
    })
    .catch(console.error);
  };
}

// Reducer
export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;
    default:
      return state;
  }
}
