import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { AuthContext } from '../../context';
import classes from './index.module.css';
import {useInput} from '../../hooks/useInput.js';

export const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login_input = useInput('');
  const password_input = useInput('');
  let navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    navigate('/posts');
  };

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Login page</h1>
      <form onSubmit={login} className={classes.login}>
        <Input type="text" placeholder='login' {...login_input}/>
        <Input type="password" placeholder='password' {...password_input}/>
        <Button onClick={() => {}}>SEND</Button>
      </form>
    </section>
  )
}
