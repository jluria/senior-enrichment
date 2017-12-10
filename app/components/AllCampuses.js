import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campusesReducer';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    if (this.props.campuses) {
      return(
        <div>
          <h2>All Campuses</h2>
          <ul>
            {
              this.props.campuses.map(campus => {
                return (
                  <div key={campus.id}>
                    <Link to={"/campuses/" + campus.id} >
                      <li>
                        <span>{campus.name}</span>
                      </li>
                    </Link>
                  </div>
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
