import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusesReducer';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    if (this.props.campuses) {
      return(
        <div>
          <ul>
            {
              this.props.campuses.map(campus => {
                return (
                  <li key={campus.id}>
                    <span>{campus.name}</span>
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
    campuses: state.campuses
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadCampuses: function () {
      dispatch(fetchCampuses());
    }
  }
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
export default AllCampusesContainer;
