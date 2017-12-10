import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/studentsReducer';

class AllStudents extends Component {
  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    if (this.props.students) {
      return(
        <div>
          <ul>
            {
              this.props.students.map(student => {
                return (
                  <li key={student.id}>
                    <span>{student.firstName}</span>
                  </li>
                );
              })
            }
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    students: state.students
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadStudents: function () {
      dispatch(fetchStudents());
    }
  }
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents);
export default AllStudentsContainer;
