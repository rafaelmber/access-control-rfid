import React from 'react';
import { StyledNavBar } from './StyledNavBar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <StyledNavBar>
      <Link to='/'>Panel</Link>
      <Link to='/app/workers'>Workers</Link>
      <Link to='/app/access'>Access List</Link>
    </StyledNavBar>
  );
}

export default NavBar;
