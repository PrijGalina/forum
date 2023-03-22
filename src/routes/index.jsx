import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "../pages/about";
import { Posts } from "../pages/posts";
import { Post } from "../pages/post";
import { NotFound } from "../pages/404";
import { Login } from "../pages/login";
import { AuthContext } from '../context';

export const AppRouter = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  console.log('isAuth', isAuth);

  const privateRoutes = [
    {path: '/about', component: <About/>, exact: false },
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <Post/>, exact: true},
    {path: '*', component: <NotFound/>, exact: false},
  ];

  const publicRoutes = [
    {path: '/login', component: <Login/>, exact: false},
    {path: '*', component: <Navigate to="/login" replace />}
  ];

  return (
    <Routes>
      {isAuth 
        ? 
          privateRoutes.map((route) => {
            return <Route key={`route_${route.path}`} path={route.path} element={route.component} exact={route.exact} />
          })
        :
          publicRoutes.map((route) => {
            return <Route key={`route_${route.path}`} path={route.path} element={route.component} exact={route.exact} />
          })
      }
    </Routes>
  )
}
