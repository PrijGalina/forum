import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about" className="navbar__link">About</Link>
        <Link to="/posts" className="navbar__link">Posts</Link>
      </div>
  </div>
  )
}
