import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink exact to="/contact">
        Contact
      </NavLink>
      <NavLink exact to="/skills">
        Skills
      </NavLink>
      <NavLink exact to="/projects">
        Projects
      </NavLink>
    </>
  );
}

export default Navbar