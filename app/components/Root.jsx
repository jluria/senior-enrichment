import React, { Component } from 'react';
import Home from './Home';
import Navbar from './Navbar';

/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */
 
export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}
