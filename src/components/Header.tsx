import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/react_redux_app/">Home</Link>
        <Link to="/react_redux_app/new">New product</Link>
      </nav>
    </header>
  );
}

export default Header;
