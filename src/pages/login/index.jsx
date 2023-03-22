import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { AuthContext } from '../../context';

export const Login = ({}) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  let navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    navigate('/posts');
  };

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder='login'/>
        <Input type="password" placeholder='password'/>
        <Button onClick={() => {}}>SEND</Button>
      </form>
    </>
  )
}
