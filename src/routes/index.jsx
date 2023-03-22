import React from 'react'
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/about";
import { Posts } from "../pages/posts";
import { Post } from "../pages/post";
import { NotFound } from "../pages/404";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route exact path="/posts" element={<Posts/>} />
      <Route exact path="/posts/:id" element={<Post/>} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
