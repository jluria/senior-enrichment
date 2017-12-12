import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../reducers/studentsReducer';

class AllStudents extends Component {
  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    if (this.props.students) {
      return(
        <div>
          <h2>All Enrolled Students</h2>
            {
              this.props.students.map(student => {
                return (
                  <div key={student.id}>
                    <Link to={"/students/" + student.id} >
                      <span>{student.fullName}</span>
                    </Link>
                  </div>
                );
              })
            }
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
