import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        {/* <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/users">Users</a> */}

        {/* <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/users">Users</Link> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/users">Users</NavLink>
    </div>
  )
}

export default Navbar