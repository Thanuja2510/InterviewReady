import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/questions/oops">OOPS</Link>
      <Link to="/questions/dbms">DBMS</Link>
      <Link to="/questions/dsa">DSA</Link>
      <Link to="/questions/sql">SQL</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
