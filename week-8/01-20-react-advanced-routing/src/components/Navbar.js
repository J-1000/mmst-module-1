import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Login from './Login';


const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
            </li>
        <li>
            <Link to='/projects'>Projects</Link>
        </li>
        <Switch>
          <Route exact path='/about' component={Login}/>
        </Switch>
      </ul>
    </nav>
  )
}

export default navbar;