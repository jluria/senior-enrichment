import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';

const Home = () => {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={AllCampuses} />
          <Route path="/students" component={AllStudents} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
        </Switch>
      </div>
    );
};

export default Home;
