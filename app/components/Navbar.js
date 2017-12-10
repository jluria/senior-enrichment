import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className='navbar'>
        <div id='application-name'>
          <h1>Intergalactic Scholarly</h1>
        </div>
        <div className='navbar-child'>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/students'>
            <button>Students</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;
