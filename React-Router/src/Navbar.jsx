import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <NavLink className="Nav_link" exact to="/">
          Home
        </NavLink>
        <NavLink className="Nav_link" exact to="/about">
          About
        </NavLink>
        <NavLink className="Nav_link" exact to="/contact">
          Contact
        </NavLink>
        <NavLink className="Nav_link" exact to="/skills">
          Skills
        </NavLink>
        <NavLink className="Nav_link" exact to="/projects">
          Projects
        </NavLink>
      </div>
    </>
  );
}

export default Navbar