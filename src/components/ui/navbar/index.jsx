import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { Button } from '../button'
import Logo from "../../../assets/logo.svg";
import classes from './navbar.module.css';

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <header className={classes.navbar}>
      <div className={classes.navbar__container}>
        <img  alt="logo" src={Logo} width="139" height="48"/>
        
        <div className={classes.navbar__links}>
          <Link to="/about" className={classes.navbar__link}>About</Link>
          <Link to="/posts" className={classes.navbar__link}>Posts</Link>
          {isAuth && <Button onClick={logout} >Log out</Button>}
        </div>
      </div>
  </header>
  )
}
