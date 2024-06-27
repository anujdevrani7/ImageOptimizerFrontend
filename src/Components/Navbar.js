import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Check </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li> */}
      </ul>
    </nav>
  )
}

export default Navbar