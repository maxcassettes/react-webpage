  import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
      <div className="logo">
     LOGO
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>  
          <li>
            <Link to='/About'>About</Link>
          </li>  
          <li>
             <Link to='/Portfolio'>Portfolio</Link>
          </li>  
          <li>
             <Link to='/Contact'>Contact</Link>
          </li>  
        </ul>
    </nav>
    </header>
    );
  }
}

export default Header;