import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

const Home = () => {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={AllCampuses} />
          <Route path="/students" component={AllStudents} />
        </Switch>
      </div>
    );
};

export default Home;
