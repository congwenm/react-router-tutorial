import React from 'react'
import NavLink from './NavLink'
import {IndexLink, Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li>
            { /* just wraps the normal link with `onlyActiveOnIndex` with this
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
              */ 
            }
            {
              /*
              <Link to="/" activeClassName="active" onlyActiveOnIndex> Home </Link>
              */
            }
            <NavLink to="/" onlyActiveOnIndex> Home </NavLink>
          </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
