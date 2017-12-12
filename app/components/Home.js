import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

const Home = () => {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route path="/students/:studentId" component={SingleStudent} />
        </Switch>
      </div>
    );
};

export default Home;
