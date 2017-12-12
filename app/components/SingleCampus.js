import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/campusReducer';

class SingleCampus extends Component {
  componentDidMount() {
    this.props.getCampus(this.props.match.params.campusId);
  }

  render() {
    const campus = this.props.campus;
    return(
      <div>
        <h2>{campus.name}</h2>
        <p>{campus.description}</p>
        <img src={campus.imageUrl} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampus(campusId) {
      dispatch(fetchCampus(dispatch, campusId))
    }
  }
}

const mapStateToProps = (store) => {
  return {
    campus: store.campus
  }
}


const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default SingleCampusContainer;
