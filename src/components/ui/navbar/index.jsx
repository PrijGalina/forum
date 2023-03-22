import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { Button } from '../button'


export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="navbar">
      {isAuth && <Button onClick={logout}>Log out</Button>}
      <div className="navbar__links">
        <Link to="/about" className="navbar__link">About</Link>
        <Link to="/posts" className="navbar__link">Posts</Link>
      </div>
  </div>
  )
}
