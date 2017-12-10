import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <div className='navbar'>
        <div id='application-name'>
          <h1>Intergalactic Scholarly</h1>
        </div>
        <div className='navbar-child'>
          <button>Home</button>
          <button>Students</button>
        </div>
      </div>
    )
  }
}

export default Navbar;
