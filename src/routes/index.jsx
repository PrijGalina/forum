import React from 'react'
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/about";
import { Posts } from "../pages/posts";
import { Post } from "../pages/post";
import { NotFound } from "../pages/404";

export const AppRouter = () => {
  const routes = [
    {path: '/about', component: <About/>, exact: false },
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <Post/>, exact: true},
    {path: '*', component: <NotFound/>, exact: false},
  ];

  return (
    <Routes>
      {
        routes.map((route) => {
          return <Route key={`route_${route.path}`} path={route.path} element={route.component} exact={route.exact} />
        })
      }
    </Routes>
  )
}
