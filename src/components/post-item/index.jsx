import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import cl from './index.module.css';

export const PostItem = ({post, remove, number}) => {
  const navigate  = useNavigate();
  
  return (
    <div className={cl.post}>
      <div>
        <strong>{post.id}. {post.title}</strong>
        <p>{post.body}</p>
      </div>
      <div className={cl.post__btns}>
        <Button onClick={()=>navigate(`/posts/${post.id}`)}>open</Button>
        <span style={{display: 'block', width: '5px'}}/>
        <Button onClick={() => remove(post)}>delete</Button>
      </div>
    </div>
  )
}
