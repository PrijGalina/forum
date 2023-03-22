import React from 'react'
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/about";
import { Posts } from "../pages/posts";
import { NotFound } from "../pages/404";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
