import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from '../reducers/studentReducer';

class SingleStudent extends Component {
  componentDidMount() {
    this.props.getStudent(this.props.match.params.studentId);
  }

  render() {
    const student = this.props.student;
    return(
      <div>
        <h2>{student.fullName}</h2>
        <p>{student.gpa}</p>
        <p>Goes to: {student.campus ? student.campus.name : ""}</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudent(studentId) {
      dispatch(fetchStudent(dispatch, studentId))
    }
  }
}

const mapStateToProps = (store) => {
  return {
    student: store.student
  }
}


const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
export default SingleStudentContainer;
