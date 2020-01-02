import React from 'react';
// nav link has an extra property call activeStyle
import { NavLink } from 'react-router-dom';

// non breaking space in jsx {" "}
function Header() {
  const activeStyle = { color: 'orange' };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={activeStyle} to="/courses">
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;
